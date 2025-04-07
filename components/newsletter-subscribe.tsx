"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSubscribe() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      if (email.includes("@")) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
      }
    }, 1000)
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black/40 border-green-500/20 focus:border-green-500"
            required
          />
          <Button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-black font-bold"
            disabled={status === "loading"}
          >
            {status === "loading" ? "..." : "Subscribe"}
          </Button>
        </div>

        {status === "success" && <p className="text-green-400 text-xs mt-1">Thanks for subscribing!</p>}

        {status === "error" && <p className="text-red-400 text-xs mt-1">Please enter a valid email.</p>}
      </form>
    </div>
  )
}

