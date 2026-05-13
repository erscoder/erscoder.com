'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Rocket, Car, Building2, Network } from 'lucide-react'

const experiences = [
  {
    company: 'ErsLabs — Synapseia Network',
    role: 'Founder & AI Systems Architect',
    period: 'Jan 2026 - Present',
    description: 'Building Synapseia Network: a decentralized peer-to-peer network where AI nodes collaborate to process and validate research papers autonomously. Coordinator-node architecture, peer review consensus, on-chain staking tiers, and SYN token rewards on Solana. Also shipped Sentinel V2 (17 CrewAI agents → SaaS MVPs), Marcus (Hyperliquid LLM trader), and the IA Rentable book.',
    highlights: ['Synapseia', 'Solana', 'NestJS', 'Tauri 2', 'CrewAI', 'Claude API', 'SYN Token'],
    icon: Network,
    color: 'from-cyber-cyan to-cyber-purple',
  },
  {
    company: 'xFractal',
    role: 'Senior Software Developer / Team Lead',
    period: 'Mar 2025 - Jan 2026',
    description: 'Designed and developed the Trading API integrating Solana DEXs (Meteora, Raydium, Orca, Pump.fun, PumpSwap, Moonshot) with hexagonal architecture. Built the order engine (limit + DCA), referral system, and the AYA agent swarm coordinator using LangGraph + RAG + Redis + MongoDB.',
    highlights: ['Solana', 'Trading API', 'LangGraph', 'AWS', 'Team Lead'],
    icon: Rocket,
    color: 'from-cyan-400 to-blue-500',
  },
  {
    company: 'Brave',
    role: 'Senior Software Developer / Team Lead',
    period: 'Apr 2022 - Mar 2025',
    description: 'Designed BravePro & BravePay APIs for financial services — 60% faster response times and auto-scaling. Built the KYC service (-70% onboarding time), USDB/USDC stability bot, rewards engine, subscription manager, oracle price feed, and Stripe fiat deposits.',
    highlights: ['BravePro API', 'KYC', 'Trading Bots', 'AWS', 'Stripe'],
    icon: Building2,
    color: 'from-orange-400 to-red-500',
  },
  {
    company: 'Wallbox',
    role: 'Senior Engineer',
    period: 'Mar 2020 - Jan 2021',
    description: 'Implemented real-time WebSocket connections between EV chargers and backend using the OCPP protocol. Developed firmware update tooling via API — improved customer satisfaction by 45%.',
    highlights: ['WebSockets', 'OCPP', 'IoT', 'Firmware'],
    icon: Car,
    color: 'from-green-400 to-emerald-500',
  },
  {
    company: 'Earlier Adventures',
    role: 'Lead Developer, Backend & Consulting Roles',
    period: '2005 - 2020',
    description: 'CanaryPAY payment platform with PayPal + Onfido KYC (Logixs). VISA verification for Bankia (Melit). Vocento-Beauty backend + Málaga councils budgeting (Autentia). Bank consulting at OESIA, Axpe, and DMR Consulting (Everis). 15 years of battle-tested fintech and consulting groundwork.',
    highlights: ['Fintech', 'Banking', 'Payments', 'Consulting'],
    icon: Briefcase,
    color: 'from-gray-400 to-gray-600',
  },
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="timeline" className="py-32 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <code className="text-cyber-cyan font-mono text-sm mb-4 block">
            {'// career.timeline()'}
          </code>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="gradient-text">Journey</span> So Far
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From junior consultant to AI Systems Architect building Synapseia Network — every step shaped who I am today.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-cyan via-cyber-purple to-cyber-pink" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-purple z-10" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div
                  className="glass rounded-2xl p-6 card-hover relative overflow-hidden group"
                >
                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color}`} />
                  
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <exp.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                        <span className="text-cyber-cyan font-mono text-xs px-2 py-0.5 glass rounded">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{exp.role}</p>
                      <p className="text-gray-300 text-sm mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
