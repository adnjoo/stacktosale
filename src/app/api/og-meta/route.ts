// app/api/og-meta/route.ts
import { NextRequest } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return new Response(JSON.stringify({ error: "Missing URL" }), {
      status: 400,
    });
  }

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const getMeta = (name: string) =>
      $(`meta[property='${name}']`).attr("content") ||
      $(`meta[name='${name}']`).attr("content") ||
      "";

    const ogData = {
      title: getMeta("og:title"),
      description: getMeta("og:description"),
      image: getMeta("og:image"),
      url: getMeta("og:url") || url,
    };

    return new Response(JSON.stringify(ogData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error fetching metadata:", err);
    return new Response(
      JSON.stringify({ error: "Failed to fetch or parse metadata." }),
      { status: 500 }
    );
  }
}
