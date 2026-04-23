import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

// Case studies. Names changed; the technical details did not.
const CASES = [
  {
    n: '01',
    title: 'North Star',
    tagline: 'Cut onboarding from 4 weeks to 3 days.',
    description:
      'Enterprise logistics customer was stalling on implementation. I designed a TypeScript SDK wrapper around our REST API and live-coded a working demo during the final sales call. Closed $1.2M ARR.',
    tags: ['TypeScript SDK', 'REST', 'OAuth2', 'Live demo'],
    impact: '$1.2M ARR · 3-day onboarding',
    year: '2026',
    tint: 'rgba(201,168,76,0.18)',
  },
  {
    n: '02',
    title: 'Bridgekeeper',
    tagline: 'Unblocked a stalled 7-figure RFP.',
    description:
      'Mid-market SaaS needed our product to sit behind a legacy iPaaS they couldn\'t rip out. Built a middleware layer bridging their event bus with our webhooks. Turned a written "no" into a 3-year contract.',
    tags: ['Node.js', 'Webhooks', 'Retool', 'GraphQL'],
    impact: '$2.4M TCV · 3-year contract',
    year: '2025',
    tint: 'rgba(104,148,188,0.15)',
  },
  {
    n: '03',
    title: 'Field Day',
    tagline: '42 qualified leads in one afternoon.',
    description:
      'Co-designed and led a hands-on technical workshop at a 200-person customer conference — walking attendees through live integration, auth, and their first API call. Sourced 5 closed-won deals the same quarter.',
    tags: ['Workshops', 'Enablement', 'Python', 'Docs'],
    impact: '42 SQLs · 5 closed-won',
    year: '2025',
    tint: 'rgba(188,104,104,0.15)',
  },
]

function CaseCard({ item, index }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const handleMove = e => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set(e.clientX - r.left)
    my.set(e.clientY - r.top)
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl p-7 transition-colors duration-500"
      style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
      data-cursor="view"
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(400px circle at var(--mx) var(--my), ${item.tint}, transparent 60%)` }}
      />

      {/* Header */}
      <div className="relative mb-12 flex items-start justify-between">
        <div className="flex items-baseline gap-3">
          <span className="eyebrow text-accent">/ {item.n}</span>
          <span className="font-mono-editorial text-[10px] text-ink-dim">{item.year}</span>
        </div>
        <span className="font-mono-editorial text-[10px] uppercase tracking-wider text-ink-dim">Case study</span>
      </div>

      {/* Title */}
      <h3 className="relative font-serif-display text-3xl font-medium leading-tight text-ink md:text-4xl">
        {item.title}
      </h3>
      <p className="relative mt-2 text-sm italic text-accent">{item.tagline}</p>

      <p className="relative mt-6 text-sm leading-relaxed text-ink-muted">{item.description}</p>

      <div className="relative mt-8 flex flex-wrap gap-1.5">
        {item.tags.map(t => (
          <span
            key={t}
            className="rounded-full px-2.5 py-1 font-mono-editorial text-[10px] uppercase tracking-wider text-ink-muted"
            style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg)' }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="relative mt-8 flex items-center justify-between border-t pt-5" style={{ borderColor: 'var(--border)' }}>
        <span className="text-sm text-ink">
          <span className="eyebrow mr-2">Impact</span>
          <span className="text-ink-muted">{item.impact}</span>
        </span>
        <span className="font-mono-editorial text-[10px] text-ink-dim">Read more ↗</span>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mb-10 flex items-center gap-4">
          <span className="eyebrow text-accent">02 — Selected Wins</span>
          <span className="h-px flex-1" style={{ backgroundColor: 'var(--border)' }} />
          <span className="eyebrow">Case Studies · 2024—26</span>
        </div>

        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-serif-display text-5xl font-medium leading-[1.05] text-ink md:text-7xl">
            Problems I've<br />
            <span className="italic text-accent">solved.</span>
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-ink-muted">
            A small, anonymized set of customer outcomes. Names changed; the technical detail did not.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {CASES.map((c, i) => (
          <CaseCard key={c.title} item={c} index={i} />
        ))}
      </div>

      {/* Side-projects footnote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 flex flex-col items-start justify-between gap-3 rounded-2xl border px-6 py-5 md:flex-row md:items-center"
        style={{ borderColor: 'var(--border)' }}
      >
        <span className="text-sm text-ink-muted">
          <span className="eyebrow mr-2">Side projects</span>
          Also a weekend software engineer. A few open-source bits live on GitHub.
        </span>
        <a
          href="https://github.com/mehadave"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-ink transition-colors hover:text-accent"
          data-cursor="link"
        >
          View on GitHub <ArrowUpRight size={14} />
        </a>
      </motion.div>
    </section>
  )
}
