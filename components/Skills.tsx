'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Blockchain & Web3',
    icon: '⛓️',
    skills: [
      { name: 'Solana', level: 95 },
      { name: 'Ethereum', level: 90 },
      { name: 'XRPL', level: 85 },
      { name: 'Stellar', level: 80 },
      { name: 'Web3.js', level: 90 },
      { name: 'Ethers.js', level: 90 },
    ],
    gradient: 'from-cyber-cyan to-blue-500',
  },
  {
    title: 'Backend & APIs',
    icon: '🔧',
    skills: [
      { name: 'TypeScript', level: 95 },
      { name: 'Node.js', level: 95 },
      { name: 'Python', level: 80 },
      { name: 'Express', level: 90 },
      { name: 'REST APIs', level: 95 },
      { name: 'GraphQL', level: 75 },
    ],
    gradient: 'from-cyber-purple to-pink-500',
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'CI/CD', level: 85 },
      { name: 'CloudFormation', level: 85 },
      { name: 'Linux', level: 90 },
      { name: 'Terraform', level: 70 },
    ],
    gradient: 'from-orange-400 to-red-500',
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Redis', level: 85 },
      { name: 'MySQL', level: 80 },
    ],
    gradient: 'from-green-400 to-emerald-500',
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <code className="text-cyber-cyan font-mono text-sm mb-4 block">
            {'// skills.showcase()'}
          </code>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The tools I use to turn ideas into production-ready code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-xs text-gray-500 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: catIndex * 0.1 + skillIndex * 0.05,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">Also fluent in:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['DDD', 'Hexagonal Architecture', 'Microservices', 'WebSockets', 'OCPP', 'Scrum', 'Git', 'React', 'Next.js', 'Angular', 'KYC/AML', 'Trading Bots'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs glass rounded-full text-gray-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
