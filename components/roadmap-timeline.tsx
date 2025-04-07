export function RoadmapTimeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500/30"></div>

      <div className="grid grid-cols-1 gap-12">
        {/* Phase 1 */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start">
          <div className="order-1 md:w-5/12"></div>
          <div className="z-10 flex items-center order-1 bg-green-500 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-black">1</h1>
          </div>
          <div className="order-1 bg-black/40 backdrop-blur-sm rounded-xl shadow-xl w-full md:w-5/12 px-6 py-4 border border-green-500/20">
            <h3 className="mb-3 font-bold text-white text-xl">Phase 1: Launch (Q2 2025)</h3>
            <ul className="text-sm text-white/70 list-disc pl-5 space-y-2">
              <li>Website launch</li>
              <li>Social media setup</li>
              <li>Community building</li>
              <li>Token launch on Base chain</li>
              <li>Initial marketing push</li>
              <li>1,000+ holders milestone</li>
            </ul>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start">
          <div className="order-1 md:w-5/12 bg-black/40 backdrop-blur-sm rounded-xl shadow-xl px-6 py-4 border border-green-500/20">
            <h3 className="mb-3 font-bold text-white text-xl">Phase 2: Growth (Q3 2025)</h3>
            <ul className="text-sm text-white/70 list-disc pl-5 space-y-2">
              <li>CoinGecko & CoinMarketCap listings</li>
              <li>Influencer partnerships</li>
              <li>PumpCat NFT collection</li>
              <li>Community events and contests</li>
              <li>10,000+ holders milestone</li>
            </ul>
          </div>
          <div className="z-10 flex items-center order-1 bg-green-500 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-black">2</h1>
          </div>
          <div className="order-1 md:w-5/12"></div>
        </div>

        {/* Phase 3 */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start">
          <div className="order-1 md:w-5/12"></div>
          <div className="z-10 flex items-center order-1 bg-green-500 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-black">3</h1>
          </div>
          <div className="order-1 bg-black/40 backdrop-blur-sm rounded-xl shadow-xl w-full md:w-5/12 px-6 py-4 border border-green-500/20">
            <h3 className="mb-3 font-bold text-white text-xl">Phase 3: Expansion (Q4 2025)</h3>
            <ul className="text-sm text-white/70 list-disc pl-5 space-y-2">
              <li>CEX listings</li>
              <li>PumpCat mobile app beta</li>
              <li>Staking platform launch</li>
              <li>Cross-chain expansion</li>
              <li>50,000+ holders milestone</li>
            </ul>
          </div>
        </div>

        {/* Phase 4 */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start">
          <div className="order-1 md:w-5/12 bg-black/40 backdrop-blur-sm rounded-xl shadow-xl px-6 py-4 border border-green-500/20">
            <h3 className="mb-3 font-bold text-white text-xl">Phase 4: Ecosystem (Q1-Q2 2026)</h3>
            <ul className="text-sm text-white/70 list-disc pl-5 space-y-2">
              <li>PumpCat DEX launch on Base</li>
              <li>Governance system implementation</li>
              <li>Strategic partnerships</li>
              <li>Metaverse integration</li>
              <li>100,000+ holders milestone</li>
            </ul>
          </div>
          <div className="z-10 flex items-center order-1 bg-green-500 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-black">4</h1>
          </div>
          <div className="order-1 md:w-5/12"></div>
        </div>
      </div>
    </div>
  )
}

