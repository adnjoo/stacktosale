import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_auto] min-h-screen p-8 sm:p-20 font-sans bg-white text-black dark:bg-black dark:text-white">
      <main className="flex flex-col gap-8 items-center text-center sm:text-left sm:items-start max-w-xl mx-auto">
        <Image
          className="dark:invert"
          src="/s2s.png"
          alt="StackToSale logo"
          width={180}
          height={38}
          priority
        />

        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          Fix your funnel. Build what converts.
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-prose">
          StackToSale helps local businesses improve PPC, CRO, and unlock real
          growth — with audits, rewrites, and tools built from r/smallbusiness
          pain points.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <a
            href="https://tally.so/r/your-form"
            className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full text-sm font-medium hover:opacity-90"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get a Free Audit
          </a>
          <a
            href="mailto:hello@stacktosale.com"
            className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Contact Us
          </a>
        </div>
      </main>
    </div>
  );
}
