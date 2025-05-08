"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="my-20 text-md text-gray-800 text-center w-full">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
        <div>
          © {new Date().getFullYear()} {siteConfig.name}. Built with focus.
        </div>
        <div className="flex gap-4 text-sm text-gray-500">
          {Object.entries(siteConfig.footerLinks).map(([key, link]) => (
            <Link key={key} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
