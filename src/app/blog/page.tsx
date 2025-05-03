import { client } from "@/sanity/lib/client";
import { allPostsQuery } from "@/sanity/lib/queries";
import Link from "next/link";

export const revalidate = 60; // ISR

export default async function BlogPage() {
  const posts = await client.fetch(allPostsQuery);

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post: any) => (
          <li key={post._id}>
            <Link href={`/blog/${post.slug.current}`}>
              <div className="text-2xl font-semibold hover:underline">
                {post.title}
              </div>
            </Link>
            <p className="text-sm text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
