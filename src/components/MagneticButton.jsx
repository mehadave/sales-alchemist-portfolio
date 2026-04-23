import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Magnetic hover — the button subtly translates toward cursor within a radius.
export default function MagneticButton({ as = 'button', strength = 0.35, className = '', children, ...rest }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.5 })

  const handleMove = e => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const cx = r.left + r.width / 2
    const cy = r.top + r.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }
  const handleLeave = () => { x.set(0); y.set(0) }

  const Component = motion[as] || motion.button

  return (
    <Component
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={className}
      {...rest}
    >
      <motion.span style={{ x: sx, y: sy, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
        {children}
      </motion.span>
    </Component>
  )
}
