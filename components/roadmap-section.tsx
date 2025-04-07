import { RoadmapTimeline } from "@/components/roadmap-timeline"

export function RoadmapSection() {
  return (
    <section id="roadmap" className="w-full py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          <span className="text-green-500">Roadmap</span>
        </h2>

        <RoadmapTimeline />
      </div>
    </section>
  )
}

