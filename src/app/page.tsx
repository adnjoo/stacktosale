import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 items-start text-left max-w-5xl mx-auto w-full px-6 py-12 font-sans bg-white text-black dark:bg-black dark:text-white">
      <Image
        className="dark:invert"
        src="/s2s.png"
        alt={`${siteConfig.name} logo`}
        width={180}
        height={38}
        priority
      />

      <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
        Fix your funnel. Build what converts.
      </h1>

      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-prose">
        We help local businesses level up PPC and CRO — with audits, rewrites,
        and real tools inspired by r/smallbusiness pain points.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <Link
          href={siteConfig.navLinks.contact.href}
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full text-sm font-medium text-center hover:opacity-90"
        >
          Get a Free Audit
        </Link>
        <Link
          href={siteConfig.navLinks.blog.href}
          className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-full text-sm font-medium text-center hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Read the Blog
        </Link>
      </div>

      {/* 🧪 Add Case Studies Below CTA */}
      <CaseStudiesSection />

      <TestimonialsSection />

      <section className="mt-24 w-full">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center sm:text-left">
          Seen enough? Let’s talk.
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base mt-2 mb-4">
          No pressure, no jargon — just a free audit and practical advice you
          can act on immediately.
        </p>
        <Link
          href="/contact"
          className="mt-2 inline-block bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90"
        >
          Claim Your Free Audit
        </Link>
      </section>
    </main>
  );
}
