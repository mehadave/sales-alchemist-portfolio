import { motion } from 'framer-motion'

const ROLES = [
  {
    company: 'Nova Labs',
    location: 'USA',
    role: 'Technical Sales Engineer',
    period: 'Apr 2024 — Sep 2024',
    summary:
      'Pre-sales technical lead for 5G, IoT and cellular solutions — translating customer requirements into deployable architectures alongside sales, product, and engineering.',
    bullets: [
      'Partnered with sales and engineering as the technical lead on 5G, IoT, and cellular opportunities — turning customer requirements into integration architectures and scoped pilots.',
      'Owned technical RFP responses, RF propagation modeling, and wireless deployment consulting; ran solution-design sessions with prospects to validate fit and de-risk PoCs before contract.',
      'Drove discovery, competitive analysis, and market sizing to qualify pipeline and shape go-to-market positioning for cloud-based IoT and advanced wireless products.',
      'Served as the technical face of the company in customer meetings and industry conferences — converting ambiguous asks into live demos, signed pilots, and expansion conversations.',
    ],
    stack: ['5G / LTE', 'IoT', 'RF modeling', 'RFPs', 'Solution design', 'Discovery'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-32">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-16 flex items-center gap-4"
      >
        <span className="eyebrow text-accent">04 — Experience</span>
        <span className="h-px flex-1" style={{ backgroundColor: 'var(--border)' }} />
        <span className="eyebrow">Pre-sales / Solutions</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-16 max-w-4xl font-serif-display text-4xl font-medium leading-[1.1] text-ink md:text-6xl"
      >
        Where I've sat between<br />
        <span className="italic text-accent">customer and code.</span>
      </motion.h2>

      <div className="flex flex-col gap-6">
        {ROLES.map((r, i) => (
          <motion.article
            key={r.company + r.period}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
            className="group relative overflow-hidden rounded-2xl p-8 md:p-10"
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
            }}
          >
            {/* gold rail */}
            <span
              className="absolute left-0 top-0 h-full w-px"
              style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
            />

            <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
              {/* Left: meta */}
              <div className="md:col-span-4">
                <div className="font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-ink-dim">
                  {r.period}
                </div>
                <h3 className="mt-3 font-serif-display text-3xl font-medium leading-tight text-ink md:text-4xl">
                  {r.company}
                </h3>
                <div className="mt-1 text-sm text-ink-muted">{r.location}</div>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
                     style={{ border: '1px solid var(--border-strong)', color: 'var(--accent)' }}>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {r.role}
                </div>
              </div>

              {/* Right: detail */}
              <div className="md:col-span-8">
                <p className="text-lg leading-relaxed text-ink">
                  {r.summary}
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {r.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-ink-muted md:text-base"
                    >
                      <span className="mt-2 h-1 w-3 flex-shrink-0 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {r.stack.map(s => (
                    <span
                      key={s}
                      className="rounded-full px-3 py-1 text-xs text-ink-muted"
                      style={{
                        border: '1px solid var(--border)',
                        backgroundColor: 'var(--surface-alt, transparent)',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
