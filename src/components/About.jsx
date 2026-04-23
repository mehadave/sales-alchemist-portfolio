import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ to, suffix = '', duration = 1.6 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    let raf
    const tick = now => {
      const p = Math.min(1, (now - start) / (duration * 1000))
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  return <span ref={ref}>{val}{suffix}</span>
}

const STATS = [
  { value: 5, suffix: '+', label: 'Years in pre-sales' },
  { value: 32, suffix: '', label: 'PoCs delivered' },
  { value: 47, suffix: '', label: 'Customer wins' },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-32">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-16 flex items-center gap-4"
      >
        <span className="eyebrow text-accent">01 — About</span>
        <span className="h-px flex-1" style={{ backgroundColor: 'var(--border)' }} />
        <span className="eyebrow">Meha Dave / Senior Solutions Engineer</span>
      </motion.div>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-10">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="md:col-span-4"
        >
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl"
               style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
            {/* Rounded ring / subtle gradient placeholder */}
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 30% 20%, rgba(201,168,76,0.15), transparent 55%), radial-gradient(circle at 70% 85%, rgba(201,168,76,0.08), transparent 60%)'
              }}
            />
            <div className="absolute inset-6 rounded-xl" style={{ border: '1px solid var(--border-strong)' }} />
            <div className="absolute left-6 top-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="eyebrow">In frame</span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <span className="font-serif-display text-5xl text-ink">MD</span>
              <span className="font-mono-editorial text-[10px] text-ink-dim">/ 2026</span>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="md:col-span-8"
        >
          <h2 className="font-serif-display text-4xl font-medium leading-[1.1] text-ink md:text-6xl">
            A technical translator with<br />
            <span className="italic text-accent">a closer's instinct.</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 text-lg leading-relaxed text-ink-muted md:grid-cols-2">
            <p>
              Five years turning vague customer asks into running prototypes. I live between sales, product, and engineering — where most deals quietly get made and most roadmaps secretly get written.
            </p>
            <p>
              My favorite moments are when a prospect says "is that even possible?" and I open a laptop. The best PoCs feel inevitable — like the customer's problem and the product's shape were always meant to fit.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-4 md:gap-8">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
                className="relative border-t pt-5"
                style={{ borderColor: 'var(--border)' }}
              >
                <div className="font-serif-display text-4xl font-medium text-ink md:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs text-ink-muted md:text-sm">{s.label}</div>
                <span className="absolute left-0 top-0 h-px w-8" style={{ backgroundColor: 'var(--accent)' }} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
