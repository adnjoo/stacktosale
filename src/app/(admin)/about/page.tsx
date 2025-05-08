export default function AboutPage() {
    return (
      <main className="max-w-screen-md mx-auto px-6 py-16 text-gray-800 dark:text-white">
        <h1 className="text-4xl font-bold mb-6">About StackToSale</h1>
  
        <div className="flex items-center gap-4 mb-8">
          <img
            src="https://avatars.githubusercontent.com/u/22807629?v=4"
            alt="Drew's avatar"
            className="w-16 h-16 rounded-full border border-gray-300 dark:border-gray-700"
          />
          <div>
            <p className="text-lg font-semibold">Hi, I’m Drew 👋</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Founder of StackToSale
            </p>
            <a
              href="https://www.linkedin.com/in/andrewnjoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 underline mt-1 inline-block"
            >
              View LinkedIn →
            </a>
          </div>
        </div>
  
        <p className="text-lg mb-6">
          StackToSale helps small businesses stop wasting ad spend and start
          converting. We fix leaky funnels with proven PPC and CRO tactics drawn
          from real-world pain points — not generic playbooks.
        </p>
  
        <h2 className="text-2xl font-semibold mt-10 mb-4">Why I Built This</h2>
        <p className="mb-4">
          After working at Amazon AWS and building tools for startups, I noticed
          how many small businesses were burning cash on bad ads and worse landing
          pages. I created StackToSale to bridge that gap — bringing practical,
          no-BS funnel fixes to teams that need results, not fluff.
        </p>
  
        <h2 className="text-2xl font-semibold mt-10 mb-4">How We Work</h2>
        <p className="mb-4">
          We keep it simple: audits, rewrites, landing pages, tracking. No retainers.
          Just clear insights, fast fixes, and honest marketing that performs.
        </p>
  
        <h2 className="text-2xl font-semibold mt-10 mb-4">What’s Next</h2>
        <p className="mb-4">
          We’re building tools to scale audits and CRO insights — so local
          businesses can improve conversion without hiring an agency. Think
          diagnostics, not dashboards.
        </p>
  
        <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
          Based in Austin, TX · Proudly independent
        </p>
  
        {/* Optional CTA */}
        <div className="mt-12 border-t pt-8">
          <h3 className="text-xl font-semibold mb-2">Ready to fix your funnel?</h3>
          <a
            href="/contact"
            className="inline-block mt-2 bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Claim Your Free Audit
          </a>
        </div>
      </main>
    );
  }
  