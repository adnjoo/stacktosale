import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

type ClassifiedLink = {
  raw: string;
  url: string;
  type: "valid" | "relative" | "javascript" | "possibly malformed";
};

function classifyLink(href: string | undefined, base: URL): ClassifiedLink | null {
  if (!href || href.trim() === "") return null;
  if (href.startsWith("javascript:")) return { raw: href, url: href, type: "javascript" };

  try {
    // Fully-qualified absolute URL
    if (/^https?:\/\//i.test(href)) {
      return { raw: href, url: href, type: "valid" };
    }

    // Looks like a domain (no slash, no protocol) but will be treated as relative in browser
    if (/^[\w.-]+\.\w{2,}(\/.*)?$/i.test(href)) {
      const resolved = new URL(href, base).href;
      return { raw: href, url: resolved, type: "possibly malformed" };
    }

    // Otherwise treat as relative
    const resolved = new URL(href, base).href;
    return { raw: href, url: resolved, type: "relative" };
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const pageUrl = req.nextUrl.searchParams.get("url");
  if (!pageUrl) {
    return NextResponse.json({ error: "Missing URL" }, { status: 400 });
  }

  try {
    const res = await fetch(pageUrl);
    const html = await res.text();
    const $ = cheerio.load(html);
    const base = new URL(pageUrl);
    const links: ClassifiedLink[] = [];

    $("a[href]").each((_, el) => {
      const href = $(el).attr("href");
      const classified = classifyLink(href, base);
      if (classified) links.push(classified);
    });

    return NextResponse.json({ links });
  } catch (err) {
    console.error("Error fetching target page:", err);
    return NextResponse.json({ error: "Failed to load page" }, { status: 500 });
  }
}
