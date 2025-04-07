import { TokenomicsChart } from "@/components/tokenomics-chart"

export function TokenomicsSection() {
  return (
    <section id="tokenomics" className="w-full py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          <span className="text-green-500">Tokenomics</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <TokenomicsChart />
          </div>

          <div className="flex-1">
            <div className="grid gap-6">
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <h3 className="text-xl font-bold text-white">Liquidity Pool</h3>
                  <span className="ml-auto text-white font-bold">50%</span>
                </div>
                <p className="text-white/70 pl-8">Locked for 1 year to ensure stability and investor confidence.</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-400"></div>
                  <h3 className="text-xl font-bold text-white">Marketing</h3>
                  <span className="ml-auto text-white font-bold">20%</span>
                </div>
                <p className="text-white/70 pl-8">Dedicated to growing PumpCat's presence across all platforms.</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-4 h-4 rounded-full bg-lime-400"></div>
                  <h3 className="text-xl font-bold text-white">Development</h3>
                  <span className="ml-auto text-white font-bold">15%</span>
                </div>
                <p className="text-white/70 pl-8">Funding future features and ecosystem expansion.</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-4 h-4 rounded-full bg-teal-400"></div>
                  <h3 className="text-xl font-bold text-white">Team</h3>
                  <span className="ml-auto text-white font-bold">10%</span>
                </div>
                <p className="text-white/70 pl-8">Vested over 6 months to align with long-term success.</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-4 h-4 rounded-full bg-cyan-400"></div>
                  <h3 className="text-xl font-bold text-white">Community Rewards</h3>
                  <span className="ml-auto text-white font-bold">5%</span>
                </div>
                <p className="text-white/70 pl-8">
                  Airdrops, contests, and incentives for our loyal PumpCat community.
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-black/60 rounded-lg">
              <div className="flex items-center gap-4 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <h4 className="text-white font-bold">Tax Structure</h4>
              </div>
              <div className="pl-9 text-white/70">
                <p>Buy Tax: 5% (3% Marketing, 2% Development)</p>
                <p>Sell Tax: 7% (4% Marketing, 2% Development, 1% Burn)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

