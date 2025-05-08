"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-black/80">
      <div className="max-w-screen-lg mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          {siteConfig.name}
        </Link>

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4 items-center">
            {Object.entries(siteConfig.navLinks).map(([key, link]) => {
              if ("subLinks" in link) {
                return (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-2 p-4 w-[200px]">
                        {Object.entries(link.subLinks).map(
                          ([subKey, subLink]) => (
                            <li key={subKey}>
                              <NavigationMenuLink
                                asChild
                                className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                              >
                                <Link href={subLink.href}>{subLink.label}</Link>
                              </NavigationMenuLink>
                            </li>
                          )
                        )}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={key}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
