// app/tools/page.tsx
"use client";

import Link from "next/link";

export default function ToolsPage() {
  const tools = [
    {
      name: "Twitter Card Preview Tool",
      description: "Preview how your website will appear on Twitter.",
      href: "/tools/twitter-card-checker",
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
            <h2 className="text-xl font-semibold mb-1">
              <Link href={tool.href} className="hover:underline">
                {tool.name}
              </Link>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {tool.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

