'use client'

import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-cyber-cyan/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyber-purple/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-pink/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Code-style intro */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <code className="text-cyber-cyan font-mono text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 rounded-full glass inline-block">
              <span className="hidden sm:inline">{'>'} Building the decentralized future since 2005</span>
              <span className="sm:hidden">{'>'} Building Web3 since 2005</span>
            </code>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="block text-white">Hey, I'm</span>
            <span className="gradient-text text-glow block">Kike Rubio</span>
          </motion.h1>

          {/* Animated role text */}
          <motion.div
            className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-white font-medium">AI & Web3 Engineer</span>
            <span className="mx-3 text-cyber-purple">|</span>
            <span className="text-white font-medium">AI Agents Developer</span>
            <span className="mx-3 text-cyber-cyan">|</span>
            <span className="text-white font-medium">DeFi Developer</span>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text">19+</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">Years Coding</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text">4</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">Blockchains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text">∞</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">Curiosity</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-purple text-dark-900 font-semibold hover:shadow-lg hover:shadow-cyber-cyan/25 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Build Together
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-4 rounded-full glass border border-white/20 hover:border-cyber-cyan/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <motion.a
              href="https://github.com/erscoder"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-white/10 transition-colors group"
              whileHover={{ y: -4 }}
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
            </motion.a>
            <motion.a
              href="https://twitter.com/kikerub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-white/10 transition-colors group"
              whileHover={{ y: -4 }}
            >
              <Twitter className="w-6 h-6 text-gray-400 group-hover:text-cyber-cyan transition-colors" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/enriquerubiosanchez/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-white/10 transition-colors group"
              whileHover={{ y: -4 }}
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-cyber-blue transition-colors" />
            </motion.a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
