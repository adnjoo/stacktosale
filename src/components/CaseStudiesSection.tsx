// src/components/CaseStudiesSection.tsx
import Link from "next/link";

export default function CaseStudiesSection() {
  return (
    <section className="w-full mt-16">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center sm:text-left">
        Recent Case Studies
      </h2>

      <div className="space-y-8">
        <div className="border border-gray-300 dark:border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-medium mb-2">
            🚨 Fixing Google Ads Chaos for a Solo Marketer
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            A startup was spending $1,500/month on broad keywords with no
            conversions. We cleaned up targeting, rewrote ad copy, and built a
            proper landing page.
          </p>
          <p className="text-sm text-green-600 dark:text-green-400 font-medium">
            ✅ 38% drop in CPC · First 3 signups in 7 days · $0 extra spend
          </p>
        </div>

        <div className="border border-gray-300 dark:border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-medium mb-2">
            🧘 Austin Yoga Studio Doubled Bookings
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Local studio burning $2K/month on ads with no bookings. We rewrote
            the CTA, fixed mobile UX, and tracked lead sources.
          </p>
          <p className="text-sm text-green-600 dark:text-green-400 font-medium">
            ✅ 2x bookings · 38% lower cost per lead in 10 days
          </p>
        </div>
      </div>

      {/* <div className="mt-6 text-center sm:text-left">
        <Link
          href="/blog"
          className="text-sm font-medium underline hover:opacity-80"
        >
          View all case studies →
        </Link>
      </div> */}
    </section>
  );
}
