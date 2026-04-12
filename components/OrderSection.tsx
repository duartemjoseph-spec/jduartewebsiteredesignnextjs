import Link from "next/link";

export default function OrderSection() {
  return (
    <section className="bg-[#131313] px-6 py-20">
      <div className="mx-auto max-w-4xl rounded-3xl bg-[#20201f] px-6 py-12 text-center shadow-lg">
        <h2 className="text-3xl font-semibold text-[#f5f1ea]">
          Ready for a Feast?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#d8c7bf]">
          Get your favorite dishes delivered straight to your door or place an
          order for quick pickup.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="https://www.doordash.com/store/peony-palace-elk-grove-93513/97333750/?srsltid=AfmBOoqNoBMjct0Z2mG5GGhpu_pjCfveUPTo00NCo8EAOnkGVbZbfHus"
            className="rounded-xl bg-linear-to-r from-[#ffb3ad] to-[#b32f2d] px-6 py-3 font-semibold text-[#4a0909]"
          >
            Order Online
          </Link>

          <Link
            href="https://www.doordash.com/store/peony-palace-elk-grove-93513/97333750/?srsltid=AfmBOoqNoBMjct0Z2mG5GGhpu_pjCfveUPTo00NCo8EAOnkGVbZbfHus"
            className="rounded-xl bg-[#ff5a2a] px-6 py-3 font-semibold text-white"
          >
            DoorDash
          </Link>
        </div>
      </div>
    </section>
  );
}