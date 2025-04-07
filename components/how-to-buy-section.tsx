import { HowToBuy } from "@/components/how-to-buy"

export function HowToBuySection() {
  return (
    <section id="how-to-buy" className="w-full py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          How to Buy <span className="text-green-500">$PCAT</span>
        </h2>

        <HowToBuy />
      </div>
    </section>
  )
}

