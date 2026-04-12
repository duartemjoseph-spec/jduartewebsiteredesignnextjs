type MenuItem = {
  name: string;
  price: string;
  description: string;
};

type MenuSectionProps = {
  title: string;
  items: MenuItem[];
};

function makeId(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "");
}

export default function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <section id={makeId(title)} className="scroll-mt-24">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-2xl font-semibold text-[#f5f1ea] md:text-3xl">
          {title}
        </h2>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.name}
            className="rounded-xl border border-white/10 bg-[#1c1b1b] p-5"
          >
            <div className="mb-2 flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-[#f5f1ea]">
                {item.name}
              </h3>
              <span className="whitespace-nowrap text-sm font-semibold text-[#e9c349]">
                {item.price}
              </span>
            </div>

            <p className="text-sm leading-6 text-[#cbbfb7]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}