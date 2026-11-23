'use client'

import { useEffect, useRef } from 'react'

// Each letter carries its own value on the font's width axis. The server renders a
// designed static state; on the client the widths follow the pointer (or a slow sweep
// when there is no pointer). Widths are normalised per line so the line length stays put.
const LINES = [
  { text: 'Enrique', preset: [150, 128, 108, 92, 78, 66, 56] },
  { text: 'Rubio', preset: [56, 78, 102, 126, 150] },
]

const MIN = 50
const MAX = 150

export default function KineticName() {
  const root = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lines = Array.from(el.querySelectorAll<HTMLElement>('[data-line]')).map((line, li) => ({
      line,
      letters: Array.from(line.querySelectorAll<HTMLElement>('[data-letter]')),
      current: [...LINES[li].preset],
    }))

    let pointer: { x: number; y: number } | null = null
    let lastMove = 0
    let visible = true
    let frame = 0

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return
      pointer = { x: e.clientX, y: e.clientY }
      lastMove = performance.now()
    }

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick)
      if (!visible) return
      const idle = !pointer || now - lastMove > 3500
      lines.forEach((l, li) => {
        const rect = l.line.getBoundingClientRect()
        const n = l.letters.length
        const sweep = 0.5 + 0.5 * Math.sin(now * 0.00045 + li * Math.PI)
        const px = idle ? rect.left + rect.width * sweep : pointer!.x
        const py = idle ? rect.top + rect.height / 2 : pointer!.y
        const sigma = Math.max(rect.width * 0.24, 1)
        const w = l.letters.map((_, i) => {
          const cx = rect.left + ((i + 0.5) / n) * rect.width
          const cy = rect.top + rect.height / 2
          const dx = px - cx
          const dy = (py - cy) * 0.6
          return Math.exp(-(dx * dx + dy * dy) / (sigma * sigma))
        })
        const mean = w.reduce((a, b) => a + b, 0) / n
        const spread = Math.max(...w.map((v) => Math.abs(v - mean)), 0.2)
        l.letters.forEach((letter, i) => {
          const target = Math.min(MAX, Math.max(MIN, 100 + ((w[i] - mean) / spread) * 50))
          l.current[i] += (target - l.current[i]) * 0.09
          letter.style.setProperty('--w', l.current[i].toFixed(1))
        })
      })
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    io.observe(el)
    window.addEventListener('pointermove', onMove, { passive: true })
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      io.disconnect()
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <h1 ref={root} className="name" aria-label="Enrique Rubio">
      {LINES.map((l) => (
        <span key={l.text} className="name-line" data-line aria-hidden="true">
          {l.text.split('').map((ch, i) => (
            <span key={i} data-letter style={{ ['--w' as string]: l.preset[i] }}>
              {ch}
            </span>
          ))}
        </span>
      ))}
    </h1>
  )
}
