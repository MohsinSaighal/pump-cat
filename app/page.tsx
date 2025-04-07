import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { HowToBuySection } from "@/components/how-to-buy-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { UtilitySection } from "@/components/utility-section"
import { TeamSection } from "@/components/team-section"
import { FaqSection } from "@/components/faq-section"
import { PriceChartSection } from "@/components/price-chart-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { LaunchCountdown } from "@/components/launch-countdown"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <LaunchCountdown />
      <TokenomicsSection />
      <UtilitySection />
      <PriceChartSection />
      <RoadmapSection />
      {/* <TeamSection /> */}
      <TestimonialsSection />
      <HowToBuySection />
      <FaqSection />
      <Footer />
    </main>
  )
}

