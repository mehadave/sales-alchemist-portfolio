import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { damping: 28, stiffness: 400, mass: 0.3 })
  const sy = useSpring(y, { damping: 28, stiffness: 400, mass: 0.3 })

  const [variant, setVariant] = useState('default')
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setEnabled(mq.matches)
    if (!mq.matches) return

    document.documentElement.classList.add('custom-cursor-active')

    const move = e => { x.set(e.clientX); y.set(e.clientY) }
    const over = e => {
      const t = e.target
      if (!(t instanceof Element)) return
      if (t.closest('a, button, [data-cursor="link"]')) setVariant('link')
      else if (t.closest('[data-cursor="view"]')) setVariant('view')
      else setVariant('default')
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [x, y])

  if (!enabled) return null

  const size = variant === 'view' ? 88 : variant === 'link' ? 36 : 14

  return (
    <>
      {/* Outer ring — smoothed */}
      <motion.div
        style={{
          translateX: sx,
          translateY: sy,
          width: size,
          height: size,
        }}
        animate={{ width: size, height: size }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="pointer-events-none fixed left-0 top-0 z-[10000] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference"
      >
        <div
          className="flex h-full w-full items-center justify-center rounded-full"
          style={{
            border: variant === 'default' ? '1px solid #f0efe8' : 'none',
            backgroundColor: variant === 'view' ? '#c9a84c' : variant === 'link' ? 'rgba(240,239,232,0.15)' : 'transparent',
            transition: 'background-color 0.3s ease, border 0.3s ease',
          }}
        >
          {variant === 'view' && (
            <span className="font-mono-editorial text-[10px] font-medium uppercase tracking-[0.15em] text-[#0a0a0a]">View</span>
          )}
        </div>
      </motion.div>

      {/* Inner precise dot — immediate */}
      <motion.div
        style={{ translateX: x, translateY: y }}
        className="pointer-events-none fixed left-0 top-0 z-[10001] h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f0efe8] mix-blend-difference"
      />
    </>
  )
}
