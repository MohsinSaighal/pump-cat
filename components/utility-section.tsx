import Image from "next/image"
import { Zap, Shield, Gift, TrendingUp, Coins, Users } from "lucide-react"

export function UtilitySection() {
  return (
    <section id="utility" className="w-full py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          $PCAT <span className="text-green-500">Utility</span>
        </h2>
        <p className="text-white/70 text-center max-w-3xl mx-auto mb-16">
          PumpCat isn't just another meme token. We're building a comprehensive ecosystem with real utility on Base
          chain.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Zap className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-white">PumpCat Staking</h3>
            <p className="text-white/70 text-center">
              Stake your $PCAT tokens to earn passive income with competitive APY rates. The longer you stake, the
              higher your rewards.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Shield className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-white">DAO Governance</h3>
            <p className="text-white/70 text-center">
              $PCAT holders can vote on important decisions affecting the ecosystem, ensuring a truly community-driven
              project.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Gift className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-white">NFT Collection</h3>
            <p className="text-white/70 text-center">
              Exclusive PumpCat NFTs with utility across our ecosystem. Hold NFTs to unlock premium features and earn
              additional rewards.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-white">Trading Analytics</h3>
            <p className="text-white/70 text-center">
              Access premium trading analytics and insights powered by PumpCat's AI technology, giving you an edge in
              the market.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Coins className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-white">PumpCat DEX</h3>
            <p className="text-white/70 text-center">
              Our decentralized exchange on Base chain will offer lower fees for $PCAT holders and innovative trading
              features.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Users className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-white">Community Rewards</h3>
            <p className="text-white/70 text-center">
              Regular airdrops, contests, and rewards for active community members who contribute to the PumpCat
              ecosystem.
            </p>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="bg-black/60 p-4 rounded-lg border border-green-500/20 max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <Image src="/pumpcat-logo.png" alt="PumpCat Logo" width={40} height={40} className="rounded-full" />
              <h4 className="text-white font-bold">Coming Soon: PumpCat Mobile App</h4>
            </div>
            <p className="text-white/70 text-sm">
              Track your $PCAT holdings, stake tokens, access trading analytics, and participate in governance votes all
              from our upcoming mobile app. Early $PCAT holders will receive exclusive premium features.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

