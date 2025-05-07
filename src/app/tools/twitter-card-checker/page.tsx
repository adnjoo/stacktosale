// app/tools/twitter-card-checker/page.tsx
"use client";

import { useState, useEffect } from "react";

export default function TwitterCardChecker() {
  const [url, setUrl] = useState("https://www.nike.com/");
  const [card, setCard] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchCard = async (targetUrl: string) => {
    setLoading(true);
    setCard(null);
    try {
      const res = await fetch(
        "/api/twitter-card?url=" + encodeURIComponent(targetUrl)
      );
      const data = await res.json();
      setCard(data);
    } catch (err) {
      setCard({ error: "Failed to fetch." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCard(url);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    fetchCard(url);
  };

  const handlePresetClick = (presetUrl: string) => {
    setUrl(presetUrl);
    fetchCard(presetUrl);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">Twitter Card Preview</h1>
      <p className="text-gray-600 mb-6">
        Paste a link below to preview its Twitter card.
      </p>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => handlePresetClick("https://www.nike.com/")}
          className="text-sm bg-gray-100 dark:bg-zinc-700 px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-zinc-600"
        >
          Nike
        </button>
        <button
          onClick={() => handlePresetClick("https://www.notion.so/")}
          className="text-sm bg-gray-100 dark:bg-zinc-700 px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-zinc-600"
        >
          Notion
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mb-6 flex gap-4">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="flex-1 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-sm bg-white dark:bg-zinc-800 text-black dark:text-white"
        />
        <button
          type="submit"
          className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90"
        >
          Preview
        </button>
      </form>

      {loading && (
        <div className="w-full max-w-xl h-[315px] bg-gray-100 dark:bg-zinc-800 animate-pulse rounded-xl mb-6"></div>
      )}

      {card && !loading && (
        <div className="border rounded-xl overflow-hidden shadow-md max-w-xl bg-white dark:bg-zinc-900">
          {card.image && (
            <img
              src={card.image}
              alt="Preview"
              className="w-full h-auto object-cover"
            />
          )}
          <div className="p-4">
            <p className="text-sm text-gray-500 mb-1">{card.url}</p>
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              {card.description}
            </p>
            <p className="text-xs text-gray-400">
              {card.card} • {card.site} • {card.creator}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
