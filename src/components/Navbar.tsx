"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (key: string) => {
    setOpenSubmenu((prev) => (prev === key ? null : key));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-black/80">
      <div className="max-w-screen-lg mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          {siteConfig.name}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4 items-center">
              {Object.entries(siteConfig.navLinks).map(([key, link]) =>
                "subLinks" in link ? (
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
                ) : (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden p-2"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t px-4 py-4 space-y-2">
          {Object.entries(siteConfig.navLinks).map(([key, link]) =>
            "subLinks" in link ? (
              <div key={key}>
                <button
                  onClick={() => toggleSubmenu(key)}
                  className="w-full text-left font-medium py-2"
                >
                  {link.label}
                </button>
                {openSubmenu === key && (
                  <div className="pl-4 space-y-1">
                    {Object.entries(link.subLinks).map(([subKey, subLink]) => (
                      <Link
                        key={subKey}
                        href={subLink.href}
                        className="block py-1 text-gray-700 dark:text-gray-300"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={key}
                href={link.href}
                className="block py-2 font-medium"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
