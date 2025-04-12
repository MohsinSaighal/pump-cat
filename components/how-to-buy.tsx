export function HowToBuy() {
  const contractAddress = "0x84773a9006d0587c1eAd066160ba00b5aE54E84d";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300">
        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
          <span className="text-green-500 font-bold text-xl">1</span>
        </div>
        <h3 className="text-xl font-bold text-center mb-4 text-white">Create a Wallet</h3>
        <p className="text-white/70 text-center mb-4">Download MetaMask or Coinbase Wallet and set up your wallet.</p>
       
      </div>

      <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300">
        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
          <span className="text-green-500 font-bold text-xl">2</span>
        </div>
        <h3 className="text-xl font-bold text-center mb-4 text-white">Get ETH on Base</h3>
        <p className="text-white/70 text-center mb-4">
          Purchase ETH and bridge it to Base chain using the Base Bridge or buy directly on Coinbase.
        </p>
     
      </div>

      <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300">
        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
          <span className="text-green-500 font-bold text-xl">3</span>
        </div>
        <h3 className="text-xl font-bold text-center mb-4 text-white">Connect to PancakeSwap</h3>
        <p className="text-white/70 text-center mb-4">
          Visit PancakeSwap and switch to Base network before connecting your wallet.
        </p>
     
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
          {`${contractAddress.slice(0, 6)}...${contractAddress.slice(-4)}`}
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-4 mt-8 bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20">
        <h3 className="text-xl font-bold text-center mb-4 text-white">Detailed Guide for Base Chain</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-green-400 font-bold mb-2">Setting Up Base Network</h4>
            <ol className="list-decimal list-inside text-white/70 space-y-2">
              <li>Open your wallet and click on the network dropdown</li>
              <li>Select "Add Network" or "Add Custom RPC"</li>
              <li>
                Enter these Base network details:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Network Name: Base</li>
                  <li>RPC URL: https://mainnet.base.org</li>
                  <li>Chain ID: 8453</li>
                  <li>Currency Symbol: ETH</li>
                  <li>Block Explorer: https://basescan.org</li>
                </ul>
              </li>
              <li>Save the network and switch to Base</li>
            </ol>
          </div>
          <div>
            <h4 className="text-green-400 font-bold mb-2">Buying on PancakeSwap (Base)</h4>
            <ol className="list-decimal list-inside text-white/70 space-y-2">
              <li>Go to pancakeswap.finance</li>
              <li>Click the network selector and choose "Base"</li>
              <li>Connect your wallet</li>
              <li>Click "Trade" then "Swap"</li>
              <li>Select ETH as the "From" token</li>
              <li>Paste $PCAT contract address in the "To" field</li>
              <li>Set slippage tolerance to 7-10%</li>
              <li>Enter amount and confirm swap</li>
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
            <li>Contract address: 0x84773a9006d0587c1eAd066160ba00b5aE54E84d</li>
            <li>Always verify the contract before swapping</li>
            <li>Set slippage to 7-10% for successful transactions</li>
            <li>Keep some ETH in your wallet for gas fees (very low on Base)</li>
            <li>For help, join our official Telegram group</li>
          </ul>
        </div>
      </div>
    </div>
  )
}