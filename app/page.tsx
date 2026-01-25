'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Timeline from '@/components/Timeline'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import ParticlesBackground from '@/components/ParticlesBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParticlesBackground />
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
