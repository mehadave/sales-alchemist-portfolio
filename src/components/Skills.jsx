import { motion } from 'framer-motion'

const SKILL_GROUPS = [
  { title: 'Integration', n: '/A', skills: ['REST APIs', 'GraphQL', 'Webhooks', 'OAuth2', 'SDK design', 'Postman'] },
  { title: 'Pre-sales', n: '/B', skills: ['Discovery', 'PoCs', 'Live demos', 'RFP response', 'Architecture diagrams', 'Enablement'] },
  { title: 'Code & Tools', n: '/C', skills: ['TypeScript', 'Python', 'SQL', 'Retool', 'Zapier', 'Figma'] },
]

const ALL = [...new Set(SKILL_GROUPS.flatMap(g => g.skills))]

const pill = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}
const group = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } }

export default function Skills() {
  return (
    <section id="skills" className="relative py-32">
      {/* Marquee ticker */}
      <div className="relative mb-24 overflow-hidden border-y py-8" style={{ borderColor: 'var(--border)' }}>
        <div className="marquee-track flex items-center gap-12 whitespace-nowrap">
          {[...ALL, ...ALL, ...ALL, ...ALL].map((s, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="font-serif-display text-5xl text-ink md:text-6xl">
                {s}
              </span>
              <span className="text-4xl text-accent">✦</span>
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32" style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32" style={{ background: 'linear-gradient(to left, var(--bg), transparent)' }} />
      </div>

      {/* Header + groups */}
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-10 flex items-center gap-4">
            <span className="eyebrow text-accent">03 — Stack</span>
            <span className="h-px flex-1" style={{ backgroundColor: 'var(--border)' }} />
            <span className="eyebrow">Toolkit / Current</span>
          </div>

          <h2 className="mb-16 max-w-3xl font-serif-display text-5xl font-medium leading-[1.05] text-ink md:text-7xl">
            The solutions <span className="italic text-accent">toolkit.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {SKILL_GROUPS.map((g, idx) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className="relative border-t pt-6"
              style={{ borderColor: 'var(--border)' }}
            >
              <span className="absolute left-0 top-0 h-px w-12" style={{ backgroundColor: 'var(--accent)' }} />
              <div className="mb-6 flex items-baseline justify-between">
                <h3 className="font-serif-display text-2xl font-medium text-ink">{g.title}</h3>
                <span className="font-mono-editorial text-[10px] text-ink-dim">{g.n}</span>
              </div>
              <motion.ul
                variants={group}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="flex flex-wrap gap-2"
              >
                {g.skills.map(s => (
                  <motion.li
                    key={s}
                    variants={pill}
                    className="rounded-full px-3.5 py-2 text-sm transition-colors hover:text-ink"
                    style={{
                      backgroundColor: 'var(--surface)',
                      border: '1px solid var(--border)',
                      color: 'var(--ink-muted)',
                    }}
                    data-cursor="link"
                  >
                    {s}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
