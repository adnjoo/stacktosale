// src/components/TestimonialsSection.tsx
import Image from "next/image";

const testimonials = [
  {
    name: "Jenny H.",
    role: "Yoga Studio Owner, Austin TX",
    quote:
      "StackToSale fixed our leaky funnel in under a week. We went from spending $2K/month on ads with no bookings to doubling our conversion rate.",
    image: "/jenny-h.png",
  },
  {
    name: "Marcus D.",
    role: "Founder, SaaS Startup",
    quote:
      "Drew helped me understand where our Google Ads budget was being wasted. The new landing page outperformed our old one by 3x.",
    image: "/marcus-d.png",
  },
  {
    name: "Angela R.",
    role: "Local Med Spa Owner",
    quote:
      "Finally someone who explains marketing in a way that makes sense. We’re getting more qualified leads and spending less to get them.",
    image: "/angela-r.png",
  },
  // repeat for seamless loop
  {
    name: "Jenny H.",
    role: "Yoga Studio Owner, Austin TX",
    quote:
      "StackToSale fixed our leaky funnel in under a week. We went from spending $2K/month on ads with no bookings to doubling our conversion rate.",
    image: "/jenny-h.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full mt-20 overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center sm:text-left">
        What People Are Saying
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll-left gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={`${t.name}-${idx}`}
              className="flex-shrink-0 w-80 border border-gray-300 dark:border-gray-700 rounded-xl p-6 bg-gray-50 dark:bg-zinc-900"
            >
              <div className="flex gap-4 items-start">
                <Image
                  src={t.image}
                  alt={`${t.name} photo`}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-sm italic text-gray-800 dark:text-gray-300 mb-2">
                    “{t.quote}”
                  </p>
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                    — {t.name}, {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
