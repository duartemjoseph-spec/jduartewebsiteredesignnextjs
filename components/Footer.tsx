import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#131313]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[#f5f1ea]">Peony Palace</h3>
          <p className="mt-2 text-sm text-[#cbbfb7]">
            © 2024 Peony Palace. All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-[#cbbfb7]">
          <Link href="#" className="hover:text-[#ffb3ad]">
            Facebook
          </Link>
          <Link href="#" className="hover:text-[#ffb3ad]">
            Instagram
          </Link>
          <Link href="#" className="hover:text-[#ffb3ad]">
            Yelp
          </Link>
        </div>
      </div>
    </footer>
  );
}