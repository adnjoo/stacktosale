// src/lib/site.ts

export const siteConfig = {
  name: "StackToSale",
  navLinks: [
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  github: "https://github.com/adnjoo/stacktosale",
  contactForm: {
    embedUrl:
      "https://tally.so/embed/meprkl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
    iframeTitle: "Contact form",
    scriptSrc: "https://tally.so/widgets/embed.js",
    iframeHeight: 300,
  },
};
