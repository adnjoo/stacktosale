import fetch from "node-fetch";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function getPexelsSearchTerm(
  title: string,
  markdown: string
): Promise<string> {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    temperature: 0.7,
    messages: [
      {
        role: "system",
        content: `
You are selecting a search term for a Pexels image to visually represent a blog post.

The image must:
- Be **nature-based** or **landscape abstract**
- Use **natural metaphors** for business/marketing ideas
- Avoid people, text, or screens

Examples:
- "wasted spend" → "leaking water"
- "broken funnel" → "broken trail"
- "clarity in copy" → "clear sky"
- "optimization" → "flowing river"

Respond with only a 1–3 word **search term** for the Pexels API. No extra text.
        `.trim(),
      },
      {
        role: "user",
        content: `Blog Title: ${title}\n\nContent:\n${markdown}`,
      },
    ],
  });

  const searchTerm = response.choices[0].message.content?.trim();
  return searchTerm || "misty forest";
}

export async function fetchCoverImageUrl(
  searchTerm: string
): Promise<string | null> {
  const API_KEY = process.env.PEXELS_API_KEY!;
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(searchTerm)}&per_page=1`;

  const res = await fetch(url, {
    headers: {
      Authorization: API_KEY,
    },
  });

  if (!res.ok) {
    console.error("❌ Failed to fetch image from Pexels");
    return null;
  }

  const data = await res.json();
  return data.photos?.[0]?.src?.large || null;
}
