'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#impact', label: 'Impact' },
  { href: '#erslabs', label: 'ErsLabs' },
  { href: '#side-projects', label: 'Side projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#writing', label: 'Writing' },
]

export default function Header({ email }: { email: string }) {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {}
    setTheme(next)
  }

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a href="#top" className="wordmark" aria-label="Enrique Rubio, back to top">
          ERS
        </a>
        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="site-nav" className="site-nav" data-open={open} aria-label="Sections">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button type="button" className="theme-toggle" onClick={toggleTheme}>
            <span className="sr-only">Switch to </span>
            {theme === 'dark' ? 'Light' : 'Dark'}
            <span className="sr-only"> theme</span>
          </button>
          <a className="button button-small" href={`mailto:${email}`}>
            Email me
          </a>
        </div>
      </div>
    </header>
  )
}
