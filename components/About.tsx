'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Globe, Layers, Shield } from 'lucide-react'

const highlights = [
  {
    icon: Globe,
    title: 'Web3 Native',
    description: 'Living and breathing decentralized tech since before it was cool.',
    color: 'from-cyber-cyan to-blue-500',
  },
  {
    icon: Layers,
    title: 'Full Stack',
    description: 'From smart contracts to cloud infrastructure, I build it all.',
    color: 'from-cyber-purple to-pink-500',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Building robust systems that handle millions in transactions.',
    color: 'from-cyber-pink to-red-500',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed because every millisecond counts in trading.',
    color: 'from-yellow-400 to-orange-500',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <code className="text-cyber-cyan font-mono text-sm mb-4 block">
            {'// who_am_i()'}
          </code>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Not Your Average <span className="gradient-text">Developer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            I'm a software engineer from <span className="text-white">Madrid, Spain</span> who fell in love with code 
            in 2005 and never looked back. When crypto came along, I knew I'd found my calling. 
            Now I architect systems that move millions, build trading bots that never sleep, 
            and help shape the <span className="text-cyber-cyan">decentralized future</span>.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 card-hover group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block glass rounded-2xl p-8 max-w-2xl">
            <p className="text-gray-400 italic">
              "I've written code for banks, electric vehicles, DeFi protocols, 
              and everything in between. But nothing beats the thrill of deploying 
              to mainnet and watching real value flow through your smart contracts."
            </p>
            <p className="text-cyber-cyan mt-4 font-mono text-sm">— Me, probably after my 5th coffee</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
