// src/lib/site.ts

export const siteConfig = {
  name: "StackToSale",
  navLinks: {
    resources: {
      label: "Resources",
      subLinks: {
        services: { href: "/services", label: "Services" },
        blog: { href: "/blog", label: "Blog" },
        tools: { href: "/tools", label: "Tools" },
        careers: { href: "/careers", label: "Careers" },
      },
    },
    about: { href: "/about", label: "About" },
    contact: { href: "/contact", label: "Contact" },
  },
  footerLinks: {
    privacy: { href: "/privacy", label: "Privacy" },
    terms: { href: "/terms", label: "Terms" },
  },
  socials: {
    youtube: "https://youtube.com/@marketingwithdrew",
    x: "https://x.com/adnjoo",
    linkedin: "https://www.linkedin.com/in/adnjoo",
  },
  contactForm: {
    embedUrl:
      "https://tally.so/embed/meprkl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
    iframeTitle: "Contact form",
    scriptSrc: "https://tally.so/widgets/embed.js",
    iframeHeight: 300,
  },
};
