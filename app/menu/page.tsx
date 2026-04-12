import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const appetizers = [
  {
    name: "Spring Rolls (2)",
    price: "6.95",
    description:
      "Crispy vegetarian rolls served with house sweet and sour sauce.",
  },
  {
    name: "Pot Stickers (6)",
    price: "8.95",
    description:
      "Pan-fried pork dumplings served with ginger soy dipping sauce.",
  },
  {
    name: "Crab Rangoon (6)",
    price: "8.50",
    description:
      "Creamy crab and scallion filled wontons, fried until golden.",
  },
  {
    name: "BBQ Pork Slices",
    price: "10.25",
    description:
      "Tender slow-roasted pork loin with honey glaze and hot mustard.",
  },
];

const chefSpecialties = [
  {
    name: "Honey Walnut Prawns",
    price: "19.95",
    description:
      "Crispy jumbo prawns tossed in a creamy honey sauce with candied walnuts.",
  },
  {
    name: "Dragon & Phoenix",
    price: "21.50",
    description:
      "Spicy. A combination of spicy General Tso’s Chicken and Shrimp with vegetables.",
  },
];

const poultry = [
  {
    name: "Kung Pao Chicken",
    price: "16.50",
    spicy: "Spicy",
    description: "Diced chicken with peanuts and chili peppers.",
  },
  {
    name: "Sweet & Sour Chicken",
    price: "14.95",
    description: "Breaded chicken with bell peppers and pineapple.",
  },
];

const beef = [
  {
    name: "Mongolian Beef",
    price: "17.25",
    description: "Tender beef wok-seared with scallions and onions.",
  },
  {
    name: "Broccoli Beef",
    price: "16.50",
    description: "Slices of beef stir-fried with fresh broccoli florets.",
  },
];

const bbqChoices = [
  "Choice of Meats",
  "Fresh Vegetables",
  "House Sauces",
  "Steamed Rice",
  "Fresh Noodles",
  "Soup & Salad",
];

function makeId(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "");
}

export default function MenuPage() {
  return (
    <main className="bg-[#131313]">
      <Navbar />

      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit rounded-2xl border border-white/10 bg-[#1c1b1b] p-5 lg:sticky lg:top-24">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#e9c349]">
              Our Offerings
            </p>

            <div className="flex flex-col gap-3">
              {[
                "Appetizers",
                "Family Dinners",
                "Chef Specialties",
                "Poultry",
                "Beef",
                "Mongolian B.B.Q.",
              ].map((section) => (
                <Link
                  key={section}
                  href={`#${makeId(section)}`}
                  className="rounded-lg border border-white/10 px-4 py-3 text-sm text-[#f5f1ea] transition hover:bg-[#2a2a2a] hover:text-[#ffb3ad]"
                >
                  {section}
                </Link>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#252524]">
              <img
                src="/images/house-special.png"
                alt="House special dish"
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="mb-2 text-base font-semibold text-[#f5f1ea]">
                  House Special
                </h3>
                <p className="text-sm leading-6 text-[#cbbfb7]">
                  Try our famous Honey Walnut Prawns, prepared fresh daily.
                </p>
              </div>
            </div>
          </aside>

          <div className="space-y-16">
            <section>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ffb3ad]">
                Our Offerings
              </p>
              <h1 className="text-4xl font-bold text-[#f5f1ea] md:text-6xl">
                The Menu
              </h1>
              <p className="mt-4 max-w-2xl leading-8 text-[#d8c7bf]">
                A curated selection of traditional flavors and modern
                interpretations. Each dish is prepared with seasonal
                ingredients and honored techniques.
              </p>
            </section>

            <section id={makeId("Appetizers")} className="scroll-mt-24">
              <div className="mb-8 flex items-center gap-4">
                <h2 className="text-3xl font-semibold text-[#f5f1ea]">
                  Appetizers
                </h2>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {appetizers.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-xl border border-white/10 bg-[#1c1b1b] p-5"
                  >
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-[#f5f1ea]">
                        {item.name}
                      </h3>
                      <span className="text-sm font-semibold text-[#e9c349]">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-[#cbbfb7]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id={makeId("Family Dinners")} className="scroll-mt-24">
              <div className="mb-8 flex items-center gap-4">
                <h2 className="text-3xl font-semibold text-[#f5f1ea]">
                  Family Dinners
                </h2>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#252524] p-8">
                <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-[#f5f1ea]">
                      Imperial Feast
                    </h3>
                    <p className="mt-2 text-sm text-[#cbbfb7]">
                      Minimum service for two or more
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-[#e9c349]">
                    24.50 per person
                  </p>
                </div>

                <div className="grid gap-4 text-sm text-[#cbbfb7] md:grid-cols-2">
                  <ul className="space-y-3">
                    <li>• Appetizer Plate (Spring Roll, BBQ Pork)</li>
                    <li>• Wonton Soup or Hot & Sour Soup</li>
                  </ul>
                  <ul className="space-y-3">
                    <li>• Selection of Main Entrées</li>
                    <li>• Steamed and Fried Rice</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id={makeId("Chef Specialties")} className="scroll-mt-24">
              <div className="mb-8 flex items-center gap-4">
                <h2 className="text-3xl font-semibold text-[#f5f1ea]">
                  Chef Specialties
                </h2>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {chefSpecialties.map((item) => (
                  <div key={item.name}>
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold uppercase text-[#f5f1ea]">
                        {item.name}
                      </h3>
                      <span className="text-sm font-semibold text-[#e9c349]">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-[#cbbfb7]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-10 md:grid-cols-2">
              <div id={makeId("Poultry")} className="scroll-mt-24">
                <div className="mb-8 flex items-center gap-4">
                  <h2 className="text-3xl font-semibold text-[#f5f1ea]">
                    Poultry
                  </h2>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <div className="space-y-8">
                  {poultry.map((item) => (
                    <div key={item.name}>
                      <div className="mb-2 flex items-start justify-between gap-4">
                        <h3 className="text-lg font-semibold text-[#f5f1ea]">
                          {item.name}
                        </h3>
                        <span className="text-sm font-semibold text-[#e9c349]">
                          ${item.price}
                        </span>
                      </div>
                      {item.spicy && (
                        <p className="mb-2 text-sm text-[#ffb3ad]">
                          {item.spicy}
                        </p>
                      )}
                      <p className="text-sm leading-6 text-[#cbbfb7]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div id={makeId("Beef")} className="scroll-mt-24">
                <div className="mb-8 flex items-center gap-4">
                  <h2 className="text-3xl font-semibold text-[#f5f1ea]">
                    Beef
                  </h2>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <div className="space-y-8">
                  {beef.map((item) => (
                    <div key={item.name}>
                      <div className="mb-2 flex items-start justify-between gap-4">
                        <h3 className="text-lg font-semibold text-[#f5f1ea]">
                          {item.name}
                        </h3>
                        <span className="text-sm font-semibold text-[#e9c349]">
                          ${item.price}
                        </span>
                      </div>
                      <p className="text-sm leading-6 text-[#cbbfb7]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section
              id={makeId("Mongolian B.B.Q.")}
              className="scroll-mt-24 overflow-hidden rounded-2xl border border-white/10 bg-[#252524]"
            >
              <div className="grid items-stretch md:grid-cols-[1.2fr_0.8fr]">
                <div className="p-8">
                  <div className="mb-8 flex items-center gap-4">
                    <h2 className="text-3xl font-semibold text-[#f5f1ea]">
                      Mongolian B.B.Q.
                    </h2>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#e9c349]">
                    A Custom Experience
                  </p>

                  <h3 className="text-2xl font-semibold text-[#f5f1ea]">
                    The Palace Grill Selection — 18.95
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-[#cbbfb7]">
                    Create your own masterpiece. Select from a variety of fresh
                    meats, vegetables, and our signature sauces. Our chefs will
                    grill your creation to perfection on our traditional iron
                    griddle.
                  </p>

                  <div className="mt-8 grid gap-4 text-sm text-[#cbbfb7] sm:grid-cols-2 lg:grid-cols-3">
                    {bbqChoices.map((choice) => (
                      <div key={choice}>• {choice}</div>
                    ))}
                  </div>
                </div>

                <div className="min-h-70">
                  <img
                    src="/images/bbq-fire.png"
                    alt="Mongolian BBQ"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}