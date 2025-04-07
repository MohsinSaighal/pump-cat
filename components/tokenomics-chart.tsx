"use client"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Liquidity Pool", value: 50, color: "#22c55e" },
  { name: "Marketing", value: 20, color: "#34d399" },
  { name: "Development", value: 15, color: "#a3e635" },
  { name: "Team", value: 10, color: "#2dd4bf" },
  { name: "Community Rewards", value: 5, color: "#22d3ee" },
]

export function TokenomicsChart() {
  return (
    <div className="w-full h-[400px] flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            innerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`${value}%`, "Allocation"]}
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              border: "1px solid #22c55e",
              borderRadius: "0.5rem",
              color: "white",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

