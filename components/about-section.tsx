export function AboutSection() {
  return (
    <section id="about" className="w-full py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          About <span className="text-green-500">PumpCat</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-white">Wall Street Origins</h3>
            <p className="text-white/70 text-center">
              Born in a secret lab beneath Wall Street, PumpCat was designed to be the perfect trader but became
              something much more powerful.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-white">Green Candle Magic</h3>
            <p className="text-white/70 text-center">
              PumpCat has the uncanny ability to turn red charts green. Every meow from PumpCat signals another green
              candle on the horizon.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-white">Community Driven</h3>
            <p className="text-white/70 text-center">
              PumpCat isn't just a token, it's a movement. Join our growing community of feline financial enthusiasts.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-green-500/20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-white">The $PCAT Token</h3>
              <p className="text-white/70 mb-6">
                $PCAT is more than just a meme token. It's a statement. A revolution in the crypto space that combines
                the internet's love for cats with the thrill of green candles and pumping charts.
              </p>
              <p className="text-white/70 mb-6">
                With innovative tokenomics and a clear roadmap, PumpCat is positioned to become the next big player in
                the meme token space on Base chain. Every transaction contributes to our marketing wallet, ensuring
                continuous growth and exposure.
              </p>
              <div className="flex items-center gap-4 bg-black/60 p-3 rounded-lg">
                <span className="text-white/70 text-sm">Contract:</span>
                <code className="text-green-400 text-sm">0x42069PumpCat...420</code>
                <button className="text-green-500 hover:text-green-400 h-6 w-6">
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
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 animate-pulse-slow">
                <div className="w-full h-full rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.3)] bg-black/60 flex items-center justify-center overflow-hidden">
                  {/* Fallback chart visualization */}
                  <div className="w-full h-full p-4 relative">
                    <div className="absolute bottom-0 left-0 right-0 h-3/4 flex items-end">
                      {/* Fake chart bars */}
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 mx-0.5 bg-green-500/70"
                          style={{
                            height: `${20 + Math.random() * 60}%`,
                            opacity: 0.4 + Math.random() * 0.6,
                          }}
                        />
                      ))}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0">
                      <svg viewBox="0 0 100 20" className="w-full">
                        <path
                          d="M0,10 Q10,5 20,15 T40,5 T60,15 T80,5 T100,15"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-green-500/20 text-green-500 text-xs px-2 py-1 rounded">
                    +420% 24h
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

