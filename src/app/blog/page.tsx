import { client } from "@/sanity/lib/client";
import { allPostsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await client.fetch(allPostsQuery);

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul className="space-y-10">
        {posts.map((post: any) => (
          <li key={post._id} className="flex gap-4">
            {post.mainImage && (
              <Link href={`/blog/${post.slug.current}`}>
                <img
                  src={urlFor(post.mainImage)
                    .width(160)
                    .height(100)
                    .fit("crop")
                    .url()}
                  alt={post.title}
                  className="rounded-md w-40 h-24 object-cover"
                />
              </Link>
            )}
            <div>
              <Link href={`/blog/${post.slug.current}`}>
                <div className="text-xl font-semibold hover:underline">
                  {post.title}
                </div>
              </Link>
              <p className="text-sm text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
