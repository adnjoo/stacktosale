"use client";

import Script from "next/script";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  const { embedUrl, iframeTitle, scriptSrc, iframeHeight } =
    siteConfig.contactForm;

  return (
    <div className="max-w-xl mx-auto px-6 py-16 text-black dark:text-white">
      <h1 className="text-4xl font-bold mb-6">Let’s Work Together</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
        Whether you need a funnel fix, PPC help, or just want to say hi — drop
        us a note. We’ll get back within 1 business day.
      </p>

      <div className="w-full">
        <iframe
          data-tally-src={embedUrl}
          width="100%"
          height={iframeHeight}
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title={iframeTitle}
          loading="lazy"
        ></iframe>
      </div>

      <Script
        id="tally-js"
        src={scriptSrc}
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).Tally) {
            (window as any).Tally.loadEmbeds();
          }
        }}
      />
    </div>
  );
}
