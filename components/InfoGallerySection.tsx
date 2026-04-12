export default function InfoGallerySection() {
  return (
    <section className="bg-[#131313] py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-5">
        <div className="space-y-8 lg:col-span-2">
          <div className="rounded-2xl bg-[#1c1b1b] p-8">
            <h3 className="mb-6 text-2xl font-semibold text-[#e9c349]">
              Visit Us
            </h3>

            <div className="space-y-5 text-[#d8c7bf]">
              <div>
                <p className="font-semibold text-[#f5f1ea]">Address</p>
                <p>10058 Bruceville Road</p>
                <p>Elk Grove, CA 95757</p>
              </div>

              <div>
                <p className="font-semibold text-[#f5f1ea]">Hours</p>
                <p>Mon - Thu: 11:00 AM - 9:00 PM</p>
                <p>Fri - Sat: 11:00 AM - 10:00 PM</p>
                <p>Sun: 12:00 PM - 9:00 PM</p>
              </div>

              <div>
                <p className="font-semibold text-[#f5f1ea]">Phone</p>
                <p>916-687-3820</p>
              </div>
            </div>
          </div>

          <img
            src="/images/map.png"
            alt="Map location"
            className="h-64 w-full rounded-2xl object-cover"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
          <img
            src="/images/tea.png"
            alt="Tea"
            className="h-64 w-full rounded-2xl object-cover"
          />
          <img
            src="/images/dimsum.png"
            alt="Dim sum"
            className="h-64 w-full rounded-2xl object-cover"
          />
          <img
            src="/images/noodles.png"
            alt="Noodles"
            className="h-64 w-full rounded-2xl object-cover"
          />
          <img
            src="/images/prawns.png"
            alt="Prawns"
            className="h-64 w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}