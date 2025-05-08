// src/lib/site.ts

export const siteConfig = {
  name: "StackToSale",
  navLinks: {
    services: { href: "/services", label: "Services" },
    blog: { href: "/blog", label: "Blog" },
    tools: { href: "/tools", label: "Tools" },
    contact: { href: "/contact", label: "Contact" },
  },
  footerLinks: {
    privacy: { href: "/privacy", label: "Privacy" },
    terms: { href: "/terms", label: "Terms" },
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
