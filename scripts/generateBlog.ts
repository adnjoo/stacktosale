import OpenAI from "openai";
import sanityClient from "@sanity/client";
import dotenv from "dotenv";
import { getPexelsSearchTerm, fetchCoverImageUrl } from "./fetchCoverImage";
import { markdownToPortableText } from "@/lib/markdownToPortableText";

dotenv.config();

// GPT setup
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

// Sanity setup
const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-01-01",
  token: process.env.SANITY_TOKEN!,
  useCdn: false,
});

// 🔹 Fetch recent post intros from Sanity
async function fetchRecentPosts(limit = 3) {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...${limit}]{
    title,
    body[0..2]
  }`;

  const posts = await client.fetch(query);

  return posts
    .map((post: any) => {
      const intro = post.body
        .map((b: any) => (b.children ?? []).map((c: any) => c.text).join(" "))
        .join("\n");
      return `Title: ${post.title}\n${intro}`;
    })
    .join("\n\n---\n\n");
}

// 🔹 Generate markdown blog content
async function generateBlogMarkdown() {
  const context = await fetchRecentPosts();

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content:
          "You write punchy, funny, and brutally honest blog posts for StackToSale, a conversion agency. Your tone is energetic, practical, and sharp — like if a direct-response copywriter got a UX degree and drank three espressos. Be helpful, but don’t pull punches. Use markdown. Include headings, bullets, and bold key takeaways.",
      },
      {
        role: "user",
        content: `Here are some recent blog posts:\n\n${context}\n\nNow write a new blog post (600–800 words) about a fresh, relevant topic in digital marketing. Avoid repeating recent themes.
      
      Use markdown. Include:
      - 2–3 headings (use ##)
      - Bullet points
      - A call-to-action at the end that links to [https://stacktosale.com/contact](https://stacktosale.com/contact)
      
      Use a persuasive, energetic tone, but keep it honest and helpful.
      
      Respond with **only markdown** — no commentary.`,
      },
    ],
  });

  return completion.choices[0].message.content ?? "";
}

// 🔹 Combine steps to get title, slug, body
async function generateBlogContent() {
  const markdown = await generateBlogMarkdown();
  const body = await markdownToPortableText(markdown);

  // Extract title and remove first block if it looks like a title
  let firstBlock = body[0]?.children?.[0]?.text || "Untitled Post";
  let title = firstBlock.replace(/^title:\s*/i, "").trim();

  // If first block is a duplicate of title, remove it from body
  if (title.toLowerCase() === firstBlock.toLowerCase()) {
    body.shift();
  }

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  // ✨ Fetch image
  const searchTerm = await getPexelsSearchTerm(title, markdown);
  const coverImageUrl = await fetchCoverImageUrl(searchTerm);

  return {
    title,
    slug,
    body,
    coverImageUrl,
    coverImageAlt: `Photo for "${searchTerm}"`,
  };
}

// 🔹 Push to Sanity
async function pushToSanity({
  title,
  slug,
  body,
  coverImageUrl,
  coverImageAlt,
}: {
  title: string;
  slug: string;
  body: any[];
  coverImageUrl: string | null;
  coverImageAlt: string;
}) {
  await client.create({
    _type: "post",
    title,
    slug: { current: slug },
    publishedAt: new Date().toISOString(),
    body,
    coverImageUrl,
    coverImageAlt,
  });

  console.log(`✅ Pushed blog: ${title}`);
}

// 🔹 Run it
export async function main() {
  const blog = await generateBlogContent();
  await pushToSanity(blog);
}

if (require.main === module) {
  main().catch(console.error);
}
