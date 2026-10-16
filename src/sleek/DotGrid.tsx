import { useEffect, useRef } from 'react'

const GAP = 26 // px between dots
const REACH = 150 // px around the cursor that light up

// Fixed dot grid behind the page. Dots near a mouse cursor take the accent colour,
// grow and lean away. Static on touch and with reduced motion.
export function DotGrid() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches
    let mx = -1e4, my = -1e4, frame = 0

    const draw = () => {
      frame = 0
      const css = getComputedStyle(document.documentElement)
      const base = css.getPropertyValue('--color-rule').trim()
      const hot = css.getPropertyValue('--color-accent').trim()
      const w = innerWidth, h = innerHeight, dpr = devicePixelRatio || 1
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) { canvas.width = w * dpr; canvas.height = h * dpr }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, w, h)
      for (let y = GAP / 2; y < h; y += GAP) {
        for (let x = GAP / 2; x < w; x += GAP) {
          const dx = x - mx, dy = y - my, d = Math.hypot(dx, dy)
          const k = d < REACH ? (1 - d / REACH) ** 2 : 0
          ctx.globalAlpha = k ? 0.3 + 0.7 * k : 1
          ctx.fillStyle = k ? hot : base
          ctx.beginPath()
          ctx.arc(x + (k && (dx / d) * 6 * k), y + (k && (dy / d) * 6 * k), 1.2 + 1.3 * k, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }
    const queue = () => { if (!frame) frame = requestAnimationFrame(draw) }
    const move = (e: PointerEvent) => {
      if (still || e.pointerType !== 'mouse') return
      mx = e.clientX; my = e.clientY; queue()
    }
    const leave = () => { mx = my = -1e4; queue() }

    draw()
    addEventListener('pointermove', move)
    addEventListener('resize', queue)
    document.documentElement.addEventListener('pointerleave', leave)
    const themeWatch = new MutationObserver(queue)
    themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => {
      cancelAnimationFrame(frame)
      removeEventListener('pointermove', move)
      removeEventListener('resize', queue)
      document.documentElement.removeEventListener('pointerleave', leave)
      themeWatch.disconnect()
    }
  }, [])

  return <canvas ref={ref} className="dot-grid" aria-hidden="true" />
}
