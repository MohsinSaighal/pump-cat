"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: "What is PumpCat?",
    answer:
      "PumpCat is a community-driven meme token on the Base chain. Born in a lab beneath Wall Street, PumpCat combines the internet's love for cats with the excitement of crypto trading. Our mission is to create a fun, engaging ecosystem with real utility beyond just being a meme token.",
  },
  {
    question: "Why is PumpCat on Base chain?",
    answer:
      "We chose Base chain for its low transaction fees, fast confirmation times, and growing ecosystem. Base is backed by Coinbase, providing additional security and credibility. This allows our community to interact with the PumpCat ecosystem without prohibitive gas fees.",
  },
  {
    question: "How do I buy $PCAT tokens?",
    answer:
      "To buy $PCAT tokens, you'll need ETH on Base chain. Connect your wallet to a DEX like BaseSwap, paste the $PCAT contract address, set your slippage to 7-10%, and complete the swap. Check our 'How to Buy' section for a detailed step-by-step guide.",
  },
  {
    question: "Is the $PCAT contract audited?",
    answer:
      "Yes, the $PCAT smart contract has been audited by CertiK and PeckShield to ensure security and reliability. You can view the full audit reports on our website under the Resources section.",
  },
  {
    question: "What are the tokenomics of $PCAT?",
    answer:
      "PumpCat has a total supply of 420,690,000,000 tokens. 50% is allocated to the liquidity pool (locked for 1 year), 20% for marketing, 15% for development, 10% for the team (vested), and 5% for community rewards. There's a 5% buy tax and 7% sell tax to support the project's growth.",
  },
  {
    question: "What utility does $PCAT have?",
    answer:
      "PumpCat offers several utilities including staking rewards, DAO governance voting rights, exclusive NFT access, trading analytics tools, reduced fees on our upcoming DEX, and community rewards. We're continuously expanding our ecosystem to provide more value to $PCAT holders.",
  },
  {
    question: "When will PumpCat launch its DEX and mobile app?",
    answer:
      "According to our roadmap, the PumpCat DEX is scheduled for Q1 2026, while the mobile app beta is planned for Q4 2025. Early $PCAT holders will receive priority access to both platforms.",
  },
  {
    question: "How can I join the PumpCat community?",
    answer:
      "You can join our vibrant community on Telegram, Discord, and Twitter. Links to all our social platforms are available in the footer of this website. We host regular AMAs, community events, and contests for our members.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="w-full py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          Frequently Asked <span className="text-green-500">Questions</span>
        </h2>
        <p className="text-white/70 text-center max-w-3xl mx-auto mb-16">
          Everything you need to know about PumpCat and the $PCAT token.
        </p>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full flex justify-between items-center p-4 rounded-lg ${
                  openIndex === index
                    ? "bg-green-500/20 border border-green-500/40"
                    : "bg-black/40 border border-green-500/20"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-white text-left">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-green-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-green-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="p-4 bg-black/20 border-x border-b border-green-500/20 rounded-b-lg">
                  <p className="text-white/70">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

