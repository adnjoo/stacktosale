"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { siteConfig } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="w-full border-b p-4 flex justify-between items-center bg-white">
      <Link href="/" className="text-xl font-bold">
        {siteConfig.name}
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {siteConfig.navLinks.map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink asChild>
                <Link href={link.href} className="px-4 py-2">
                  {link.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
