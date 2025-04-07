export function HowToBuy() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300">
        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
          <span className="text-green-500 font-bold text-xl">1</span>
        </div>
        <h3 className="text-xl font-bold text-center mb-4 text-white">Create a Wallet</h3>
        <p className="text-white/70 text-center mb-4">Download MetaMask or Coinbase Wallet and set up your wallet.</p>
        <div className="flex justify-center gap-4">
          <img src="/metamask-logo.png" alt="MetaMask" className="h-8 w-8 opacity-70 hover:opacity-100 transition" />
          <img
            src="/coinbase-wallet-logo.png"
            alt="Coinbase Wallet"
            className="h-8 w-8 opacity-70 hover:opacity-100 transition"
          />
        </div>
      </div>

      <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300">
        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
          <span className="text-green-500 font-bold text-xl">2</span>
        </div>
        <h3 className="text-xl font-bold text-center mb-4 text-white">Get ETH on Base</h3>
        <p className="text-white/70 text-center mb-4">
          Purchase ETH and bridge it to Base chain using the Base Bridge or Coinbase.
        </p>
        <div className="flex justify-center gap-4">
          <img src="/ethereum-logo.png" alt="Ethereum" className="h-8 w-8 opacity-70 hover:opacity-100 transition" />
          <img src="/base-logo.png" alt="Base" className="h-8 w-8 opacity-70 hover:opacity-100 transition" />
        </div>
      </div>

      <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300">
        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
          <span className="text-green-500 font-bold text-xl">3</span>
        </div>
        <h3 className="text-xl font-bold text-center mb-4 text-white">Connect to BaseSwap</h3>
        <p className="text-white/70 text-center mb-4">
          Visit BaseSwap or Aerodrome and connect your wallet to the DEX.
        </p>
        <div className="flex justify-center gap-4">
          <img src="/baseswap-logo.png" alt="BaseSwap" className="h-8 w-8 opacity-70 hover:opacity-100 transition" />
          <img src="/aerodrome-logo.png" alt="Aerodrome" className="h-8 w-8 opacity-70 hover:opacity-100 transition" />
        </div>
      </div>

      <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300">
        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
          <span className="text-green-500 font-bold text-xl">4</span>
        </div>
        <h3 className="text-xl font-bold text-center mb-4 text-white">Swap for $PCAT</h3>
        <p className="text-white/70 text-center mb-4">
          Enter the $PCAT contract address, set slippage to 7-10%, and swap your ETH for PumpCat tokens.
        </p>
        <div className="flex justify-center">
          <div className="px-4 py-2 bg-green-500/20 rounded-lg text-green-500 text-sm font-mono">
            0x42069PumpCat...420
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-4 mt-8 bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20">
        <h3 className="text-xl font-bold text-center mb-4 text-white">Detailed Guide for Base Chain</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-green-400 font-bold mb-2">Setting Up Base Network in MetaMask</h4>
            <ol className="list-decimal list-inside text-white/70 space-y-2">
              <li>Open MetaMask and click on the network dropdown at the top</li>
              <li>Select "Add Network"</li>
              <li>
                Enter the following details:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Network Name: Base</li>
                  <li>RPC URL: https://mainnet.base.org</li>
                  <li>Chain ID: 8453</li>
                  <li>Currency Symbol: ETH</li>
                  <li>Block Explorer: https://basescan.org</li>
                </ul>
              </li>
              <li>Click "Save" to add Base network</li>
            </ol>
          </div>
          <div>
            <h4 className="text-green-400 font-bold mb-2">Bridging ETH to Base</h4>
            <ol className="list-decimal list-inside text-white/70 space-y-2">
              <li>Visit the official Base Bridge at bridge.base.org</li>
              <li>Connect your wallet</li>
              <li>Select Ethereum as the source and Base as the destination</li>
              <li>Enter the amount of ETH you want to bridge</li>
              <li>Confirm the transaction and wait for it to complete (usually takes 10-15 minutes)</li>
              <li>Alternatively, you can buy ETH directly on Base through Coinbase</li>
            </ol>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <h4 className="text-yellow-400 font-bold flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            Important Notes
          </h4>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>Always verify the contract address before swapping</li>
            <li>Set slippage to 7-10% to account for the buy/sell tax</li>
            <li>Keep some ETH in your wallet for gas fees on Base (they're very low, but still required)</li>
            <li>Join our Telegram for help if you encounter any issues during the purchase process</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

