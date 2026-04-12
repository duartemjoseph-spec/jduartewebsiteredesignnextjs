import AboutSection from "@/components/AboutSection";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InfoGallerySection from "@/components/InfoGallerySection";
import Navbar from "@/components/Navbar";
import OrderSection from "@/components/OrderSection";

const categories = [
  {
    title: "Appetizers",
    subtitle: "Crispy Savory Starts",
    image: "/images/appetizers.png",
  },
  {
    title: "Chef Specialties",
    subtitle: "Signature House Recipes",
    image: "/images/chef-specialties.png",
  },
  {
    title: "Family Dinners",
    subtitle: "Crafted for Community",
    image: "/images/family-dinners.png",
  },
];

export default function Home() {
  return (
    <main className="bg-[#131313]">
      <Navbar />
      <Hero />

      <section className="bg-[#131313] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ffb3ad]">
              Curated Selection
            </p>
            <h2 className="text-3xl font-semibold text-[#f5f1ea] md:text-4xl">
              Signature Categories
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                subtitle={category.subtitle}
                image={category.image}
              />
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <OrderSection />
      <InfoGallerySection />
      <Footer />
    </main>
  );
}
