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
      $(`meta[name='${name}']`).attr("content") || "";

    const twitterData = {
      title: getMeta("twitter:title"),
      description: getMeta("twitter:description"),
      image: getMeta("twitter:image"),
      card: getMeta("twitter:card"),
      site: getMeta("twitter:site"),
      creator: getMeta("twitter:creator"),
      url: url,
    };

    return new Response(JSON.stringify(twitterData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error fetching Twitter metadata:", err);
    return new Response(
      JSON.stringify({ error: "Failed to fetch or parse Twitter metadata." }),
      { status: 500 }
    );
  }
}

