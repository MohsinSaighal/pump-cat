"use client"
import Image from "next/image"
import Link from "next/link"
import { Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"

export function Navbar() {
  return (
    <header className="w-full fixed top-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/pumpcat-logo.png" alt="PumpCat Logo" width={40} height={40} className="rounded-full" />
          <span className="text-xl font-bold text-white hidden sm:inline-block">PumpCat</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-white/80 hover:text-green-400 transition">
            About
          </Link>
          <Link href="#tokenomics" className="text-white/80 hover:text-green-400 transition">
            Tokenomics
          </Link>
          <Link href="#roadmap" className="text-white/80 hover:text-green-400 transition">
            Roadmap
          </Link>
          <Link href="#how-to-buy" className="text-white/80 hover:text-green-400 transition">
            How to Buy
          </Link>
        </nav>

        <div className="flex items-center gap-4">
        <Link href="https://x.com/SunfaceAI" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon" className="text-white hover:text-green-400">
              <Twitter className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://t.me/PumpCat_degen" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="text-white hover:text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
              </svg>
            </Button>
          </Link>
          <Button className="bg-green-500 hover:bg-green-600 text-black font-bold">Buy Now</Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

