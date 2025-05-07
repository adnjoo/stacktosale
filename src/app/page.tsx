import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import CaseStudiesSection from "@/components/CaseStudiesSection";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_auto] min-h-screen p-8 sm:p-20 font-sans bg-white text-black dark:bg-black dark:text-white">
      <main className="flex flex-col gap-8 items-center text-center sm:text-left sm:items-start max-w-xl mx-auto">
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
      </main>
    </div>
  );
}
