import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import MagneticButton from './MagneticButton'

// Character-level reveal for the serif headline
function SplitReveal({ text, delay = 0, className = '', italic = false }) {
  const chars = [...text]
  return (
    <span className={`inline-block overflow-hidden align-baseline ${className}`} aria-label={text}>
      {chars.map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: '110%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 0.9, delay: delay + i * 0.035, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
          style={{ fontStyle: italic ? 'italic' : 'normal' }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden pt-28">
      {/* Corner meta — top right */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute right-6 top-28 hidden flex-col items-end gap-1 text-right md:flex"
      >
        <span className="eyebrow">Solutions / 2026</span>
        <span className="font-mono-editorial text-[10px] text-ink-dim">N 40.7128° · W 74.0060°</span>
      </motion.div>

      {/* Main block */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6">
        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="h-px w-10" style={{ backgroundColor: 'var(--accent)' }} />
          <span className="eyebrow text-accent">Senior Solutions Engineer · Est. 2020</span>
        </motion.div>

        {/* Display name */}
        <h1 className="font-serif-display text-[14vw] font-medium leading-[0.95] text-ink md:text-[11vw] lg:text-[180px]">
          <span className="block">
            <SplitReveal text="Meha" delay={0.15} />
          </span>
          <span className="block text-accent">
            <SplitReveal text="Dave." delay={0.42} italic />
          </span>
        </h1>

        {/* Sub row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12"
        >
          <div className="md:col-span-7">
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-ink-muted md:text-xl">
              I turn customer complexity into shipped technical wins — from discovery call to signed PoC. Living at the seam between sales, product, and engineering where most good deals quietly get made.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:col-span-5 md:justify-end">
            <MagneticButton
              as="a"
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
              data-cursor="link"
            >
              See Wins
              <ArrowDownRight size={16} />
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border px-6 py-3.5 text-sm font-medium text-ink"
              style={{ borderColor: 'var(--border-strong)' }}
              data-cursor="link"
            >
              Contact
              <ArrowUpRight size={16} />
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Bottom footer rail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-6 pb-10 md:flex-row md:items-end"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono-editorial text-[10px] text-ink-dim">Scroll</span>
          <span className="relative block h-8 w-px" style={{ backgroundColor: 'var(--border-strong)' }}>
            <span className="float-down absolute left-1/2 top-0 block h-3 w-px -translate-x-1/2" style={{ backgroundColor: 'var(--accent)' }} />
          </span>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-3 md:grid-cols-3">
          {[
            ['Now', 'Open to roles · Remote'],
            ['Focus', 'Pre-sales · Integrations'],
            ['Toolkit', 'REST · OAuth · SDKs'],
          ].map(([k, v]) => (
            <div key={k} className="flex flex-col">
              <span className="eyebrow">{k}</span>
              <span className="mt-1 text-sm text-ink">{v}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
