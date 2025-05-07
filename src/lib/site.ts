// src/lib/site.ts

export const siteConfig = {
  name: "StackToSale",
  navLinks: {
    services: { href: "/services", label: "Services" },
    blog: { href: "/blog", label: "Blog" },
    // caseStudies: { href: "/case-studies", label: "Case Studies" },
    contact: { href: "/contact", label: "Contact" },
  },
  github: "https://github.com/adnjoo/stacktosale",
  contactForm: {
    embedUrl:
      "https://tally.so/embed/meprkl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
    iframeTitle: "Contact form",
    scriptSrc: "https://tally.so/widgets/embed.js",
    iframeHeight: 300,
  },
};
