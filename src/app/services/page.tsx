export default function ServicesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-12 text-black dark:text-white">
      <h1 className="text-4xl font-bold">Services</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-prose">
        We help local businesses stop wasting money on traffic that doesn’t
        convert. Whether you’re bleeding leads, overspending on ads, or have a
        funnel that just feels off — we fix that.
      </p>

      <div className="space-y-8">
        <ServiceCard
          title="Funnel Audit"
          desc="Get a diagnostic video showing where your landing page or funnel is leaking conversions."
        />
        <ServiceCard
          title="PPC Management"
          desc="We run high-performing Google & Meta ad campaigns — with clean UTM structure, A/B testing, and clear reporting."
        />
        <ServiceCard
          title="Landing Page Rebuilds"
          desc="Your site has 3 seconds to convince someone. We redesign pages with speed, clarity, and mobile performance in mind."
        />
        <ServiceCard
          title="Conversion Optimization (CRO)"
          desc="We analyze your full user journey and implement tweaks to lift your conversion rate over time."
        />
        <ServiceCard
          title="Lead Attribution Fixes"
          desc="If you don’t know where leads come from, we’ll clean up your tracking stack so you stop flying blind."
        />
      </div>

      <div className="mt-12">
        <a
          href="https://tally.so/r/your-form"
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full text-sm font-medium hover:opacity-90"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get a Free Audit
        </a>
      </div>
    </div>
  );
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
    </div>
  );
}
