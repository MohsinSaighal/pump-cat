"use client"

import { useState, useEffect, useMemo } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function LaunchCountdown() {
  // Use useMemo to ensure the launch date is only calculated once
  const launchDate = useMemo(() => {
    const date = new Date()
    date.setDate(date.getDate() + 30)
    return date
  }, [])

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +launchDate - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [launchDate]) // Now launchDate is stable and won't cause re-renders

  return (
    <section className="w-full py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-green-500/20 to-green-900/20 p-8 rounded-xl border border-green-500/30 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
            PumpCat Token <span className="text-green-500">Launch</span>
          </h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-10">
            The countdown has begun! Get ready for the official launch of $PCAT on Base chain.
          </p>

          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-black/60 p-4 rounded-lg text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">{timeLeft.days}</div>
              <div className="text-white/60 text-sm">Days</div>
            </div>
            <div className="bg-black/60 p-4 rounded-lg text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">{timeLeft.hours}</div>
              <div className="text-white/60 text-sm">Hours</div>
            </div>
            <div className="bg-black/60 p-4 rounded-lg text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">{timeLeft.minutes}</div>
              <div className="text-white/60 text-sm">Minutes</div>
            </div>
            <div className="bg-black/60 p-4 rounded-lg text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">{timeLeft.seconds}</div>
              <div className="text-white/60 text-sm">Seconds</div>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  )
}

