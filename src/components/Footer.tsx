"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20 py-12 text-gray-800 text-sm">
      <div className="max-w-screen-lg mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">

        {/* Column 1: Branding + Socials */}
        <div className="flex flex-col gap-4">
          <div className="font-bold text-lg">{siteConfig.name}</div>
          <div className="text-gray-500">Built with focus.</div>
          <div className="flex gap-4 mt-2 text-gray-500">
            <Link
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 hover:text-red-500 transition" />
            </Link>
            <Link
              href={siteConfig.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
            >
              <Twitter className="w-5 h-5 hover:text-blue-500 transition" />
            </Link>
          </div>
        </div>

        {/* Column 2: Footer links */}
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-gray-600">
            {Object.entries(siteConfig.footerLinks).map(([key, link]) => (
              <li key={key}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Navigation summary */}
        <div>
          <h4 className="font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-gray-600">
            {Object.entries(siteConfig.navLinks).map(([key, link]) => {
              if ("subLinks" in link) {
                return Object.entries(link.subLinks).map(([subKey, subLink]) => (
                  <li key={subKey}>
                    <Link href={subLink.href} className="hover:underline">
                      {subLink.label}
                    </Link>
                  </li>
                ));
              }
              return (
                <li key={key}>
                  <Link href={link.href} className="hover:underline">
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="mt-12 border-t pt-6 text-center text-gray-400 text-xs">
        © 2025 {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
