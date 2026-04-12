import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-food.png')" }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-[#131313] via-[#131313]/85 to-[#131313]/30" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-16">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#e9c349]">
            Authentic Culinary Experience
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-[#f5f1ea] md:text-7xl">
            Peony Palace
          </h1>

          <p className="mb-8 max-w-xl text-base leading-8 text-[#d8c7bf] md:text-lg">
            Experience the art of traditional Chinese cuisine redefined. We
            blend our heritage and recipes with a modern restaurant feel in the heart
            of Elk Grove.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
  <Link
    href="https://www.doordash.com/store/peony-palace-elk-grove-93513/97333750/?srsltid=AfmBOoqNoBMjct0Z2mG5GGhpu_pjCfveUPTo00NCo8EAOnkGVbZbfHus"
    className="rounded-xl bg-linear-to-r from-[#ffb3ad] to-[#b32f2d] px-6 py-3 text-center font-semibold text-[#4a0909] transition hover:scale-[1.02]"
  >
    Order Online
  </Link>

            <Link
              href="/menu"
              className="rounded-xl border border-[#e9c349]/30 bg-[#2a2a2a] px-6 py-3 text-center font-semibold text-[#e9c349] transition hover:bg-[#333333]"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}