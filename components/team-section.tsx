import Image from "next/image"
import { Twitter, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  social: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Alex Meowington",
    role: "Founder & CEO",
    bio: "Former Wall Street trader with 10+ years experience. Crypto enthusiast since 2013. Turned to the meme side in 2023.",
    image: "/team/alex.png",
    social: {
      twitter: "https://twitter.com/alexmeow",
      linkedin: "https://linkedin.com/in/alexmeow",
    },
  },
  {
    name: "Sophia Purrington",
    role: "CTO",
    bio: "Blockchain developer with experience at Coinbase and Uniswap. Base chain expert and DeFi innovator.",
    image: "/team/sophia.png",
    social: {
      twitter: "https://twitter.com/sophiapurr",
      github: "https://github.com/sophiapurr",
    },
  },
  {
    name: "Max Whiskers",
    role: "Head of Marketing",
    bio: "Marketing genius behind several successful crypto projects. Specializes in community building and viral campaigns.",
    image: "/team/max.png",
    social: {
      twitter: "https://twitter.com/maxwhiskers",
      linkedin: "https://linkedin.com/in/maxwhiskers",
    },
  },
  {
    name: "Luna Clawson",
    role: "Creative Director",
    bio: "Award-winning designer with a passion for creating memorable brand experiences in Web3 and crypto.",
    image: "/team/luna.png",
    social: {
      twitter: "https://twitter.com/lunaclaws",
      github: "https://github.com/lunaclaws",
    },
  },
]

export function TeamSection() {
  return (
    <section id="team" className="w-full py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          Meet the <span className="text-green-500">Team</span>
        </h2>
        <p className="text-white/70 text-center max-w-3xl mx-auto mb-16">
          The brilliant minds behind PumpCat, combining expertise in finance, blockchain, marketing, and design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-sm rounded-xl border border-green-500/20 overflow-hidden group"
            >
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-green-400 text-sm">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/70 text-sm mb-4">{member.bio}</p>
                <div className="flex gap-2">
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full text-white/60 hover:text-green-400"
                      >
                        <Twitter className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full text-white/60 hover:text-green-400"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full text-white/60 hover:text-green-400"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-green-500/20 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-6 text-white">Join the PumpCat Team</h3>
          <p className="text-white/70 text-center mb-6">
            We're always looking for talented individuals who are passionate about crypto, memes, and building the
            future of finance.
          </p>
          <div className="flex justify-center">
            <Button className="bg-green-500 hover:bg-green-600 text-black font-bold">View Open Positions</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

