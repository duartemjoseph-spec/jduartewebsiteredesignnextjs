import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#131313]/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-wide text-[#f5f1ea]"
        >
          Peony Palace
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm text-[#f5f1ea] transition hover:text-[#ffb3ad]"
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="text-sm text-[#f5f1ea] transition hover:text-[#ffb3ad]"
          >
            Menu
          </Link>
          <Link
            href="/contact"
            className="text-sm text-[#f5f1ea] transition hover:text-[#ffb3ad]"
          >
            Contact
          </Link>
        </div>

        <Link
          href="https://www.doordash.com/store/peony-palace-elk-grove-93513/97333750/?srsltid=AfmBOoqNoBMjct0Z2mG5GGhpu_pjCfveUPTo00NCo8EAOnkGVbZbfHus"
          className="rounded-lg bg-linear-to-r from-[#ffb3ad] to-[#b32f2d] px-4 py-2 text-sm font-semibold text-[#4a0909] transition hover:scale-[1.02]"
        >
          Order Online
        </Link>
      </nav>

      <div className="border-t border-white/10 px-6 py-3 md:hidden">
        <div className="flex items-center justify-center gap-6 text-sm text-[#f5f1ea]">
          <Link href="/" className="hover:text-[#ffb3ad]">
            Home
          </Link>
          <Link href="/menu" className="hover:text-[#ffb3ad]">
            Menu
          </Link>
          <Link href="/contact" className="hover:text-[#ffb3ad]">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}