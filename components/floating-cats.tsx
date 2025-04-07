"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface FloatingCat {
  id: number
  x: number
  y: number
  size: number
  speed: number
  rotation: number
  rotationSpeed: number
}

export function FloatingCats() {
  const [cats, setCats] = useState<FloatingCat[]>([])

  useEffect(() => {
    // Create initial cats
    const initialCats: FloatingCat[] = []
    for (let i = 0; i < 8; i++) {
      initialCats.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 30,
        speed: 0.1 + Math.random() * 0.2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.5,
      })
    }
    setCats(initialCats)

    // Animation loop
    const interval = setInterval(() => {
      setCats((prevCats) =>
        prevCats.map((cat) => ({
          ...cat,
          y: (cat.y + cat.speed) % 100,
          rotation: (cat.rotation + cat.rotationSpeed) % 360,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {cats.map((cat) => (
        <div
          key={cat.id}
          className="absolute opacity-20"
          style={{
            left: `${cat.x}%`,
            top: `${cat.y}%`,
            width: `${cat.size}px`,
            height: `${cat.size}px`,
            transform: `rotate(${cat.rotation}deg)`,
          }}
        >
          <Image
            src="/pumpcat-logo.png"
            alt="Floating PumpCat"
            width={cat.size}
            height={cat.size}
            className="rounded-full"
          />
        </div>
      ))}
    </div>
  )
}

