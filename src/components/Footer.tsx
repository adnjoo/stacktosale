import { siteConfig } from "@/lib/site";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="my-20 text-md text-gray-800 text-center w-full">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
        <div>
          © {new Date().getFullYear()} {siteConfig.name}. Built with focus.
        </div>
        <Link
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-black dark:hover:text-white"
        >
          <Github className="w-5 h-5" />
          <span className="text-sm">View source</span>
        </Link>
      </div>
    </footer>
  );
}
