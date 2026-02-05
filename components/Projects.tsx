'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Zap, Shield, TrendingUp, Bot } from 'lucide-react'

const projects = [
  {
    title: 'xFractal Trading API',
    description: 'High-performance trading API integrating multiple Solana DEXs (Meteora, Raydium, Orca, Pump.fun, PumpSwap). Built with hexagonal architecture for maximum scalability.',
    tags: ['Solana', 'TypeScript', 'AWS', 'MongoDB'],
    icon: TrendingUp,
    gradient: 'from-cyber-cyan to-blue-500',
  },
  {
    title: 'SamuraiBot',
    description: 'Telegram trading bot on Solana with lightning-fast execution. Real-time price monitoring, limit orders, and DCA strategies.',
    tags: ['Solana', 'Telegram Bot', 'Node.js'],
    icon: Bot,
    gradient: 'from-red-500 to-orange-500',
  },
  {
    title: 'Robin Protocol',
    description: 'Multichain DApp for recovering tokens from compromised wallets. Saved countless users from losing their assets.',
    tags: ['Ethereum', 'React', 'Web3.js', 'Multichain'],
    icon: Shield,
    gradient: 'from-cyber-purple to-pink-500',
  },
  {
    title: 'BravePro & BravePay APIs',
    description: 'Financial services APIs handling real money. 60% faster response times, auto-scaling, and bulletproof security.',
    tags: ['Node.js', 'AWS', 'Stripe', 'KYC'],
    icon: Zap,
    gradient: 'from-yellow-400 to-orange-500',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <code className="text-cyber-cyan font-mono text-sm mb-4 block">
            {'// projects.highlight()'}
          </code>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects that showcase what I can do when given a problem and a deadline.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden card-hover group"
            >
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-8">
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com/erscoder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-white/10 transition-colors group"
            whileHover={{ scale: 1.05 }}
          >
            <Github className="w-5 h-5" />
            <span>See more on GitHub</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
