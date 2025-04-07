"use client"

import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CounterAnimation } from "@/components/counter-animation"
import { FloatingCats } from "@/components/floating-cats"

export function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <FloatingCats />
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            PumpCat.live
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">Where Every Meow is a Green Candle</p>
          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto lg:mx-0">
            In a lab deep beneath Wall Street, scientists tried to breed the perfect trader. Instead, they got PumpCat —
            the cat that pumps charts harder than your favorite meme coin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="bg-green-500 hover:bg-green-600 text-black font-bold text-lg px-8 py-6">
              Buy $PCAT <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500/10 font-bold text-lg px-8 py-6"
            >
              Read Whitepaper
            </Button>
          </div>

          <div className="mt-12 p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-green-500/20 flex flex-col sm:flex-row justify-between gap-8">
            <div className="text-center">
              <p className="text-white/60 mb-2">Market Cap</p>
              <CounterAnimation value={4213789} prefix="$" className="text-2xl font-bold text-white" />
            </div>
            <div className="text-center">
              <p className="text-white/60 mb-2">Holders</p>
              <CounterAnimation value={12467} className="text-2xl font-bold text-white" />
            </div>
            <div className="text-center">
              <p className="text-white/60 mb-2">$PCAT Price</p>
              <CounterAnimation value={0.00042} prefix="$" decimals={5} className="text-2xl font-bold text-green-400" />
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
            <Image
              src="/pumpcat-logo.png"
              alt="PumpCat"
              width={400}
              height={400}
              className="rounded-full border-4 border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.5)]"
            />
            <div className="absolute -top-4 -right-4 bg-green-500 text-black font-bold px-4 py-2 rounded-full animate-pulse">
              +420%
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-8 left-0 w-full flex justify-center">
        <ChevronDown className="w-8 h-8 text-green-500 animate-bounce" />
      </div>
    </section>
  )
}

