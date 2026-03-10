"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200 dark:bg-[#0a0a0a] dark:border-b-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          My Portfolio
        </Link>
        <div className="flex gap-4">
          {/* <Link href="/blog" className="text-sm hover:underline">
            Blog
          </Link> */}
          <Link
            href={isHome ? "/contact" : "/"}
            className="text-sm hover:underline"
          >
            {isHome ? "Contact" : "Home"}
          </Link>
        </div>
      </div>
    </nav>
  );
}
