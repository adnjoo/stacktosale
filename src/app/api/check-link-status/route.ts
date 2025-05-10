import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { links }: { links: { url: string; raw: string; type: string }[] } = await req.json();

  if (!Array.isArray(links)) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const results = await Promise.all(
    links.map(async ({ url, raw, type }) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        return { url, raw, type, status: res.status };
      } catch {
        return { url, raw, type, status: "broken" };
      }
    })
  );

  return NextResponse.json({ results });
}
