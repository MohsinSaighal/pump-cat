"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  avatar: string
  role: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah K.",
    avatar: "/testimonials/sarah.png",
    role: "Crypto Investor",
    content:
      "PumpCat has been my best investment of 2025. The community is amazing and the team is always transparent about their plans. Can't wait to see what's next!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael T.",
    avatar: "/testimonials/michael.png",
    role: "DeFi Enthusiast",
    content:
      "I've been in crypto since 2017 and PumpCat is one of the most promising meme tokens I've seen. The Base chain integration makes transactions fast and cheap.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica L.",
    avatar: "/testimonials/jessica.png",
    role: "NFT Collector",
    content:
      "The PumpCat NFT collection is not just beautiful but actually has utility in their ecosystem. This is how meme tokens should be done!",
    rating: 4,
  },
  {
    id: 4,
    name: "David R.",
    avatar: "/testimonials/david.png",
    role: "Blockchain Developer",
    content:
      "As a developer, I appreciate the clean code and security measures in the PumpCat smart contract. The team clearly knows what they're doing.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  return (
    <section className="w-full py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          What People <span className="text-green-500">Say</span>
        </h2>
        <p className="text-white/70 text-center max-w-3xl mx-auto mb-16">
          Hear from our community of PumpCat enthusiasts.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-green-500/20">
                    <div className="flex items-center gap-4 mb-6">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full border-2 border-green-500"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                        <p className="text-green-400 text-sm">{testimonial.role}</p>
                      </div>
                      <div className="ml-auto flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-white/80 italic">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-black/80 border-green-500/50 text-green-400 hover:bg-green-500/10 rounded-full"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-black/80 border-green-500/50 text-green-400 hover:bg-green-500/10 rounded-full"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-green-500" : "bg-gray-600"}`}
                onClick={() => {
                  setAutoplay(false)
                  setActiveIndex(index)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

