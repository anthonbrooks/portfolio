import Link from "next/link";
export default function Navbar() {
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
          <a href="#skills" className="text-sm hover:underline">
            Skills
          </a>
          <a href="#contact" className="text-sm hover:underline">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
