"use client";

import Link from "next/link";

export default function ToolsPage() {
  const tools = [
    {
      name: "Twitter Card Preview Tool",
      description: "Preview how your website will appear on Twitter.",
      href: "/tools/twitter-card-checker",
      image:
        "https://c.static-nike.com/a/images/w_1920,c_limit/bzl2wmsfh7kgdkufrrjq/image.jpg",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Free Tools</h1>
      <p className="text-gray-600 mb-8">
        Handy utilities to make your marketing life easier.
      </p>

      <ul className="space-y-4">
        {tools.map((tool) => (
          <li
            key={tool.href}
            className="border rounded-xl p-4 bg-white dark:bg-zinc-900 shadow-sm"
          >
            <Link href={tool.href} className="block group">
              {tool.image && (
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="rounded-md mb-4 h-40 w-full object-cover group-hover:opacity-90 transition"
                />
              )}
              <h2 className="text-xl font-semibold mb-1 group-hover:underline">
                {tool.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {tool.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
