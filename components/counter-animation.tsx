"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface CounterAnimationProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  decimals?: number
  className?: string
}

export function CounterAnimation({
  value,
  prefix = "",
  suffix = "",
  duration = 2000,
  decimals = 0,
  className,
}: CounterAnimationProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const startAnimation = (timestamp: number) => {
      startTime = timestamp
      animateCount(timestamp)
    }

    const animateCount = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const currentCount = progress * value

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount)
      } else {
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(startAnimation)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [value, duration])

  const formatNumber = (num: number) => {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  }

  return (
    <span className={cn("tabular-nums", className)}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

