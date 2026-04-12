import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const orderUrl =
  "https://www.doordash.com/store/peony-palace-elk-grove-93513/97333750/?srsltid=AfmBOoqNoBMjct0Z2mG5GGhpu_pjCfveUPTo00NCo8EAOnkGVbZbfHus";

export default function ContactPage() {
  return (
    <main className="bg-[#131313]">
      <Navbar />

      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#e9c349]">
            Get in Touch
          </p>

          <h1 className="max-w-xl text-4xl font-semibold leading-tight text-[#f5f1ea] md:text-6xl">
            We’d love to hear from you.
          </h1>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1c1b1b]">
              <img
                src="/images/contact-interior.png"
                alt="Dining space"
                className="h-full min-h-90 w-full object-cover"
              />
              <div className="border-t border-white/10 p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-[#ffb3ad]">
                  The atmosphere
                </p>
                <p className="mt-2 text-lg text-[#f5f1ea]">
                  A quiet corner for your evening.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-4">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1c1b1b]">
              <img
                src="/images/contact-map.png"
                alt="Map location"
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <h2 className="mb-3 text-lg font-semibold text-[#f5f1ea]">
                  Our Location
                </h2>
                <p className="text-sm leading-6 text-[#cbbfb7]">
                  10058 Bruceville Rd, Elk Grove, CA 95757
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#1c1b1b] p-5">
              <p className="mb-4 text-xs uppercase tracking-[0.16em] text-[#ffb3ad]">
                Hours of Operation
              </p>

              <div className="space-y-4 text-sm text-[#cbbfb7]">
                <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-2">
                  <span>Mon - Thu</span>
                  <span>11:00 AM - 9:30 PM</span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-2">
                  <span>Fri - Sat</span>
                  <span>11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Sunday</span>
                  <span>12:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#1c1b1b] p-5">
              <h2 className="mb-4 text-lg font-semibold text-[#f5f1ea]">
                Direct Contact
              </h2>

              <div className="space-y-4 text-sm text-[#cbbfb7]">
                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.16em] text-[#9f958e]">
                    Phone
                  </p>
                  <p>(916) 687-3820</p>
                </div>

                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.16em] text-[#9f958e]">
                    Email
                  </p>
                  <p>hello@peonypalace.com</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-[#b32f2d] to-[#d6574d] p-5">
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full border border-white/10" />
              <div className="absolute -top-6 right-8 h-16 w-16 rounded-full border border-white/10" />

              <h2 className="mb-3 text-xl font-semibold text-[#fbe3de]">
                Ready to dine?
              </h2>

              <p className="mb-6 text-sm leading-6 text-[#f7d0ca]">
                Skip the wait and enjoy your favorites ready for pickup or
                delivery.
              </p>

              <a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-[#f8d2cc] px-4 py-3 text-sm font-semibold text-[#7c1a13] transition hover:scale-[1.02]"
              >
                Order Online Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}