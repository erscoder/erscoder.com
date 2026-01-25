'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, MapPin, Github, Twitter, Linkedin, Send } from 'lucide-react'

const contactLinks = [
  {
    name: 'Email',
    value: 'enrique.rubio.developer@gmail.com',
    href: 'mailto:enrique.rubio.developer@gmail.com',
    icon: Mail,
    color: 'hover:text-cyber-cyan',
  },
  {
    name: 'Twitter',
    value: '@kikerub',
    href: 'https://twitter.com/kikerub',
    icon: Twitter,
    color: 'hover:text-blue-400',
  },
  {
    name: 'GitHub',
    value: 'erscoder',
    href: 'https://github.com/erscoder',
    icon: Github,
    color: 'hover:text-white',
  },
  {
    name: 'LinkedIn',
    value: 'enriquerubiosanchez',
    href: 'https://www.linkedin.com/in/enriquerubiosanchez/',
    icon: Linkedin,
    color: 'hover:text-blue-500',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <code className="text-cyber-cyan font-mono text-sm mb-4 block">
            {'// contact.init()'}
          </code>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Got a Web3 project? Need a blockchain expert? Or just want to chat about Solana?
            I'm always down for interesting conversations.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyber-cyan/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyber-purple/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
              <MapPin className="w-5 h-5 text-cyber-cyan" />
              <span>Madrid, Spain 🇪🇸</span>
            </div>

            {/* Contact links */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className={`flex items-center gap-4 p-4 glass rounded-xl ${link.color} transition-colors group`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{link.name}</p>
                    <p className="font-medium">{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center"
            >
              <motion.a
                href="mailto:enrique.rubio.developer@gmail.com?subject=Let's%20build%20something%20cool"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-purple text-dark-900 font-semibold hover:shadow-lg hover:shadow-cyber-cyan/25 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5" />
                Send me a message
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-sm">
            Designed & built with{' '}
            <span className="text-cyber-pink">♥</span>
            {' '}by Kike Rubio
          </p>
          <p className="text-gray-700 text-xs mt-2 font-mono">
            © {new Date().getFullYear()} • Made with Next.js, Tailwind & Framer Motion
          </p>
        </motion.footer>
      </div>
    </section>
  )
}
