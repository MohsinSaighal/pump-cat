"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="text-white">
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col">
          <div className="flex justify-end p-4">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white">
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            <Link
              href="#about"
              className="text-2xl font-bold text-white hover:text-green-400 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#tokenomics"
              className="text-2xl font-bold text-white hover:text-green-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Tokenomics
            </Link>
            <Link
              href="#utility"
              className="text-2xl font-bold text-white hover:text-green-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Utility
            </Link>
            <Link
              href="#roadmap"
              className="text-2xl font-bold text-white hover:text-green-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Roadmap
            </Link>
            <Link
              href="#team"
              className="text-2xl font-bold text-white hover:text-green-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link
              href="#how-to-buy"
              className="text-2xl font-bold text-white hover:text-green-400 transition"
              onClick={() => setIsOpen(false)}
            >
              How to Buy
            </Link>
            <Link
              href="#faq"
              className="text-2xl font-bold text-white hover:text-green-400 transition"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>

            <Button
              className="bg-green-500 hover:bg-green-600 text-black font-bold mt-8"
              onClick={() => setIsOpen(false)}
            >
              Buy Now
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

