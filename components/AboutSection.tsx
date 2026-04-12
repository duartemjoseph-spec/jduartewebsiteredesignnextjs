export default function AboutSection() {
  return (
    <section className="bg-[#1c1b1b] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-[#ffb3ad]/30" />
          <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-2 border-r-2 border-[#e9c349]/30" />

          <img
            src="/images/interior.png"
            alt="Restaurant interior"
            className="h-105 w-full rounded-md object-cover shadow-2xl"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#e9c349]">
            Our Story
          </p>

          <h2 className="mb-6 text-4xl font-semibold leading-tight text-[#f5f1ea] md:text-5xl">
            20 Years of Culinary Excellence
          </h2>

          <p className="mb-5 leading-8 text-[#d8c7bf]">
            Peony Palace has been a cornerstone of the Elk Grove community for
            20 years. Our goal has always been simple: serve comforting Chinese
            cuisine made with fresh ingredients and familiar flavors.
          </p>

          <p className="leading-7 text-[#cbbfb7]">
            From hand-folded appetizers to classic house favorites, every dish
            is made to feel welcoming, warm, and worth coming back for.
          </p>
        </div>
      </div>
    </section>
  );
}