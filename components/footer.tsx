import Image from "next/image";
import Link from "next/link";
import { Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NewsletterSubscribe } from "@/components/newsletter-subscribe";

export function Footer() {
  return (
    <footer className="w-full py-12 bg-gray-900 border-t border-green-500/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/pumpcat-logo.png"
                alt="PumpCat Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-white">PumpCat</h3>
                <p className="text-white/60 text-sm">
                  Where Every Meow is a Green Candle
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm mb-4">
              The cat that pumps charts harder than your favorite meme coin,
              exclusively on Base chain.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://x.com/SunfaceAI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-green-400"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://t.me/PumpCat_degen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-green-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                  </svg>
                </Button>
              </Link>
              <Link
                href="https://discord.com/channels/1357898232658661386/1359004865635946646"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-green-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <div className="grid gap-2">
              <Link
                href="#about"
                className="text-white/60 hover:text-green-400 transition"
              >
                About
              </Link>
              <Link
                href="#tokenomics"
                className="text-white/60 hover:text-green-400 transition"
              >
                Tokenomics
              </Link>
              <Link
                href="#roadmap"
                className="text-white/60 hover:text-green-400 transition"
              >
                Roadmap
              </Link>
              <Link
                href="#team"
                className="text-white/60 hover:text-green-400 transition"
              >
                Team
              </Link>
              <Link
                href="#how-to-buy"
                className="text-white/60 hover:text-green-400 transition"
              >
                How to Buy
              </Link>
              <Link
                href="#faq"
                className="text-white/60 hover:text-green-400 transition"
              >
                FAQ
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white font-bold text-lg mb-4">Resources</h4>
            <div className="grid gap-2">
              <Link
                href="/whitepaper.pdf"
                className="text-white/60 hover:text-green-400 transition"
              >
                Whitepaper
              </Link>
              <Link
                href="https://basescan.org"
                target="_blank"
                className="text-white/60 hover:text-green-400 transition"
              >
                Contract (Base)
              </Link>
              <Link
                href="https://dexscreener.com"
                target="_blank"
                className="text-white/60 hover:text-green-400 transition"
              >
                Chart
              </Link>
              <Link
                href="/audit.pdf"
                className="text-white/60 hover:text-green-400 transition"
              >
                Audit
              </Link>
              <Link
                href="/media-kit.zip"
                className="text-white/60 hover:text-green-400 transition"
              >
                Media Kit
              </Link>
              <Link
                href="/brand.pdf"
                className="text-white/60 hover:text-green-400 transition"
              >
                Brand Guidelines
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white font-bold text-lg mb-4">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-4">
              Subscribe to our newsletter for the latest updates, airdrops, and
              exclusive offers.
            </p>
            <NewsletterSubscribe />
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2025 PumpCat. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/terms"
              className="text-white/60 hover:text-green-400 text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-white/60 hover:text-green-400 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/disclaimer"
              className="text-white/60 hover:text-green-400 text-sm"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
