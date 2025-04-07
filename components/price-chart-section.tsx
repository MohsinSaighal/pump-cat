"use client"

import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Button } from "@/components/ui/button"

// Sample data for the chart
const dailyData = [
  { date: "Apr 1", price: 0.0001 },
  { date: "Apr 2", price: 0.00012 },
  { date: "Apr 3", price: 0.00018 },
  { date: "Apr 4", price: 0.00015 },
  { date: "Apr 5", price: 0.00022 },
  { date: "Apr 6", price: 0.0003 },
  { date: "Apr 7", price: 0.00042 },
]

const weeklyData = [
  { date: "Week 1", price: 0.00005 },
  { date: "Week 2", price: 0.0001 },
  { date: "Week 3", price: 0.00018 },
  { date: "Week 4", price: 0.00025 },
  { date: "Week 5", price: 0.00032 },
  { date: "Week 6", price: 0.00038 },
  { date: "Week 7", price: 0.00042 },
]

const monthlyData = [
  { date: "Jan", price: 0.00001 },
  { date: "Feb", price: 0.00005 },
  { date: "Mar", price: 0.0002 },
  { date: "Apr", price: 0.00042 },
]

type TimeRange = "daily" | "weekly" | "monthly"

export function PriceChartSection() {
  const [timeRange, setTimeRange] = useState<TimeRange>("daily")

  const chartData = {
    daily: dailyData,
    weekly: weeklyData,
    monthly: monthlyData,
  }

  return (
    <section id="price-chart" className="w-full py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          $PCAT <span className="text-green-500">Price Chart</span>
        </h2>
        <p className="text-white/70 text-center max-w-3xl mx-auto mb-16">
          Track the performance of PumpCat token on Base chain.
        </p>

        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-bold text-white">$PCAT/USD</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-2xl font-bold text-green-400">$0.00042</span>
                <span className="text-green-400 text-sm bg-green-400/20 px-2 py-1 rounded">+12.5%</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant={timeRange === "daily" ? "default" : "outline"}
                className={
                  timeRange === "daily"
                    ? "bg-green-500 hover:bg-green-600 text-black"
                    : "border-green-500/50 text-green-400 hover:bg-green-500/10"
                }
                onClick={() => setTimeRange("daily")}
              >
                24H
              </Button>
              <Button
                variant={timeRange === "weekly" ? "default" : "outline"}
                className={
                  timeRange === "weekly"
                    ? "bg-green-500 hover:bg-green-600 text-black"
                    : "border-green-500/50 text-green-400 hover:bg-green-500/10"
                }
                onClick={() => setTimeRange("weekly")}
              >
                7D
              </Button>
              <Button
                variant={timeRange === "monthly" ? "default" : "outline"}
                className={
                  timeRange === "monthly"
                    ? "bg-green-500 hover:bg-green-600 text-black"
                    : "border-green-500/50 text-green-400 hover:bg-green-500/10"
                }
                onClick={() => setTimeRange("monthly")}
              >
                30D
              </Button>
            </div>
          </div>

          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData[timeRange]} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="date" stroke="#888" tick={{ fill: "#888" }} />
                <YAxis
                  stroke="#888"
                  tick={{ fill: "#888" }}
                  tickFormatter={(value) => `$${value.toFixed(5)}`}
                  domain={["dataMin", "dataMax"]}
                />
                <Tooltip
                  formatter={(value) => [`$${Number(value).toFixed(5)}`, "Price"]}
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    border: "1px solid #22c55e",
                    borderRadius: "0.5rem",
                    color: "white",
                  }}
                  labelStyle={{ color: "white" }}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#22c55e"
                  strokeWidth={3}
                  dot={{ fill: "#22c55e", r: 6 }}
                  activeDot={{ fill: "#22c55e", r: 8, stroke: "white", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/60 p-4 rounded-lg">
              <p className="text-white/60 text-sm mb-1">Market Cap</p>
              <p className="text-white font-bold">$17,669,000</p>
            </div>
            <div className="bg-black/60 p-4 rounded-lg">
              <p className="text-white/60 text-sm mb-1">24h Volume</p>
              <p className="text-white font-bold">$3,245,890</p>
            </div>
            <div className="bg-black/60 p-4 rounded-lg">
              <p className="text-white/60 text-sm mb-1">Liquidity</p>
              <p className="text-white font-bold">$2,100,000</p>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href="https://dexscreener.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-500 text-sm flex items-center gap-1"
            >
              View on DEX Screener
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

