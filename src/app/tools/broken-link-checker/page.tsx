"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type LinkCheckResult = {
  raw: string;
  url: string;
  status: number | string;
  type: string;
};

export default function BrokenLinkChecker() {
  const searchParams = useSearchParams();
  const initialUrl = searchParams.get("url") || "";
  const router = useRouter();
  const [targetUrl, setTargetUrl] = useState(initialUrl);
  const [results, setResults] = useState<LinkCheckResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkLinks = async (url: string) => {
    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const res = await fetch(
        `/api/fetch-links?url=${encodeURIComponent(url)}`
      );
      const { links } = await res.json();

      const statusRes = await fetch("/api/check-link-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ links }),
      });

      const { results: linkResults } = await statusRes.json();
      setResults(linkResults);
    } catch (err) {
      setError("Failed to fetch or parse page.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // update the query param in the URL bar
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("url", targetUrl);
    router.push(`/tools/broken-link-checker?${newParams.toString()}`);

    // run the check
    checkLinks(targetUrl);
  };

  useEffect(() => {
    if (initialUrl) {
      checkLinks(initialUrl);
    }
  }, [initialUrl]);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">Broken Link Checker</h1>
      <p className="text-gray-600 mb-6">
        Enter a URL below. We'll check all links on the page.
      </p>

      <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
        <input
          type="url"
          value={targetUrl}
          onChange={(e) => setTargetUrl(e.target.value)}
          placeholder="https://example.com"
          className="flex-1 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-sm bg-white dark:bg-zinc-800 text-black dark:text-white"
        />
        <button
          type="submit"
          className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90"
        >
          Check
        </button>
      </form>

      {loading && <p>Checking links...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {results.length > 0 && (
        <div className="space-y-3">
          {results.map((r, i) => (
            <div key={i} className="text-sm">
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {r.raw}
              </a>{" "}
              —{" "}
              {typeof r.status === "number"
                ? r.status === 200
                  ? "✅ OK"
                  : `⚠️ HTTP ${r.status}`
                : "❌ Broken"}
              {r.type === "possibly malformed" && (
                <span className="text-yellow-600">
                  {" "}
                  (likely broken due to missing protocol)
                </span>
              )}
              {r.type === "relative" && (
                <span className="text-gray-500"> (relative link)</span>
              )}
              {r.type === "javascript" && (
                <span className="text-gray-400"> (JS link)</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
