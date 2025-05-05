import { client } from "@/sanity/lib/client";
import { allPostsQuery } from "@/sanity/lib/queries";
import Link from "next/link";
import PostImage from "@/components/PostImage";

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await client.fetch(allPostsQuery);

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="grid gap-8 sm:grid-cols-2">
        {posts.map((post: any) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="group block"
          >
            <div className="overflow-hidden rounded-lg shadow-sm">
              <PostImage
                mainImage={post.mainImage}
                coverImageUrl={post.coverImageUrl}
                alt={post.coverImageAlt || post.title}
                width={640}
                height={360}
                crop
                className="w-full h-40 object-cover group-hover:opacity-90 transition"
              />
            </div>
            <div className="mt-3">
              <h2 className="text-lg font-semibold group-hover:underline">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
