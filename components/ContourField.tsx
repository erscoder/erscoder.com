'use client'

import { useEffect, useRef } from 'react'

// Animated elevation contours drawn by a fragment shader. Purely decorative: it is
// initialised when the browser is idle, pauses off screen, and renders a single still
// frame under prefers-reduced-motion. Without WebGL2 the canvas simply stays empty.

const VERT = `#version 300 es
in vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }`

const FRAG = `#version 300 es
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform vec3 uLine;
uniform vec3 uAccent;
uniform float uSeed;
out vec4 o;

vec3 perm(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 pm = perm(perm(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m; m = m * m;
  vec3 x = 2.0 * fract(pm * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 q = vec2(uv.x * aspect, uv.y);
  float t = uTime * 0.035;
  float h = 0.62 * snoise(q * 0.85 + vec2(t, -t * 0.6) + uSeed)
          + 0.26 * snoise(q * 1.9 - vec2(t * 0.8, t * 0.3) + uSeed * 2.0)
          + 0.08 * snoise(q * 4.1 + vec2(-t, t) + uSeed * 3.0);
  vec2 m = vec2(uMouse.x * aspect, uMouse.y);
  h += 0.55 * exp(-dot(q - m, q - m) / 0.045);

  float v = h * 9.0;
  float d = abs(fract(v - 0.5) - 0.5) / max(fwidth(v), 1e-4);
  float line = 1.0 - smoothstep(0.0, 1.35, d);
  float major = step(mod(floor(v + 0.5), 4.0), 0.5);

  // Fade towards the left and the bottom so the copy stays clean.
  float mask = smoothstep(0.05, 0.75, uv.x) * smoothstep(0.0, 0.35, uv.y);
  vec3 col = mix(uLine, uAccent, major);
  float a = line * mix(0.34, 0.95, major) * mask;
  o = vec4(col * a, a);
}`

function cssColor(name: string): [number, number, number] {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  const hex = raw.replace('#', '')
  if (hex.length !== 6) return [1, 1, 1]
  return [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255) as [number, number, number]
}

export default function ContourField({ seed = 0 }: { seed?: number }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    let dispose = () => {}

    const start = () => {
      const gl = canvas.getContext('webgl2', { alpha: true, antialias: false, premultipliedAlpha: true })
      if (!gl) return

      const compile = (type: number, src: string) => {
        const s = gl.createShader(type)!
        gl.shaderSource(s, src)
        gl.compileShader(s)
        return s
      }
      const prog = gl.createProgram()!
      gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT))
      gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG))
      gl.linkProgram(prog)
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return
      gl.useProgram(prog)

      const buf = gl.createBuffer()
      gl.bindBuffer(gl.ARRAY_BUFFER, buf)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
      const loc = gl.getAttribLocation(prog, 'p')
      gl.enableVertexAttribArray(loc)
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

      const u = (n: string) => gl.getUniformLocation(prog, n)
      const uRes = u('uRes')
      const uTime = u('uTime')
      const uMouse = u('uMouse')
      const uLine = u('uLine')
      const uAccent = u('uAccent')
      gl.uniform1f(u('uSeed'), seed)

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const mouse = { x: 0.78, y: 0.62, tx: 0.78, ty: 0.62 }
      let visible = true
      let frame = 0
      const t0 = performance.now()

      const colors = () => {
        gl.uniform3fv(uLine, cssColor('--fg'))
        gl.uniform3fv(uAccent, cssColor('--accent'))
      }
      const resize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.75)
        const w = Math.round(canvas.clientWidth * dpr)
        const h = Math.round(canvas.clientHeight * dpr)
        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w
          canvas.height = h
          gl.viewport(0, 0, w, h)
        }
        gl.uniform2f(uRes, w, h)
      }
      const draw = (now: number) => {
        mouse.x += (mouse.tx - mouse.x) * 0.05
        mouse.y += (mouse.ty - mouse.y) * 0.05
        gl.uniform1f(uTime, reduced ? 12 : (now - t0) / 1000 + 12)
        gl.uniform2f(uMouse, mouse.x, mouse.y)
        gl.clearColor(0, 0, 0, 0)
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.drawArrays(gl.TRIANGLES, 0, 3)
      }
      const loop = (now: number) => {
        frame = requestAnimationFrame(loop)
        if (visible && !document.hidden) draw(now)
      }
      const still = () => {
        resize()
        colors()
        draw(performance.now())
      }

      const onMove = (e: PointerEvent) => {
        if (e.pointerType === 'touch') return
        const r = canvas.getBoundingClientRect()
        mouse.tx = (e.clientX - r.left) / r.width
        mouse.ty = 1 - (e.clientY - r.top) / r.height
      }
      const io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting
      })
      const ro = new ResizeObserver(() => (reduced ? still() : resize()))
      const mo = new MutationObserver(() => (reduced ? still() : colors()))

      still()
      canvas.dataset.ready = 'true'
      io.observe(canvas)
      ro.observe(canvas)
      mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
      if (!reduced) {
        window.addEventListener('pointermove', onMove, { passive: true })
        frame = requestAnimationFrame(loop)
      }

      dispose = () => {
        cancelAnimationFrame(frame)
        io.disconnect()
        ro.disconnect()
        mo.disconnect()
        window.removeEventListener('pointermove', onMove)
      }
    }

    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(start, { timeout: 1200 })
      : window.setTimeout(start, 200)

    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(idle as number)
      else window.clearTimeout(idle as number)
      dispose()
    }
  }, [seed])

  return <canvas ref={ref} className="contours" aria-hidden="true" />
}
