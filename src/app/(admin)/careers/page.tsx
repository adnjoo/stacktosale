import { siteConfig } from "@/lib/site";
import React from "react";

export default function CareersPage() {
  const { embedUrl, iframeTitle, iframeHeight } = siteConfig.contactForm;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-6">🚧 Careers at StackToSale</h1>
      <p className="text-lg mb-8">
        We’re not hiring right this second—but we will be soon. If you’re smart,
        curious, and allergic to BS, we want to hear from you.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          📍 What We’ll Probably Need
        </h2>
        <ul className="space-y-4">
          <li>
            <strong>PPC Specialist / Growth Hacker</strong> — You dream in ROAS
            and tweak ad copy in your sleep.
          </li>
          <li>
            <strong>Conversion-Focused Designer</strong> — You know why buttons
            should be rounder and headlines sharper.
          </li>
          <li>
            <strong>Full-Stack Developer (React + AI APIs)</strong> — You move
            fast, break nothing, and build tools with taste.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔮 Our Vibe</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Work async, from anywhere.</li>
          <li>Results &gt; rituals.</li>
          <li>No meetings unless there’s memes.</li>
          <li>We build for outcomes, not optics.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">💌 Want in?</h2>
        <p className="mb-4">
          Drop your info here. We'll ping you when the timing is right.
        </p>
        <iframe
          src={embedUrl}
          width="100%"
          height={iframeHeight || "300"}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title={iframeTitle || "Join Our Talent Pool"}
        ></iframe>
      </section>

      <p className="italic text-gray-500">
        P.S. Even if there’s nothing open now, great people always find a way
        in. Pitch us something cool.
      </p>
    </div>
  );
}
