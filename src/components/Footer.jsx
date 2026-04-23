import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-20 overflow-hidden border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto max-w-7xl px-6 pb-14 pt-20">
        {/* Columns */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div>
            <span className="eyebrow">Index</span>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              {['About', 'Work', 'Stack', 'Contact'].map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="link-underline" data-cursor="link">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Elsewhere</span>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              <li><a href="https://github.com/mehadave" target="_blank" rel="noreferrer" className="link-underline" data-cursor="link">GitHub ↗</a></li>
              <li><a href="https://www.linkedin.com/in/meha-dave/" target="_blank" rel="noreferrer" className="link-underline" data-cursor="link">LinkedIn ↗</a></li>
            </ul>
          </div>
          <div>
            <span className="eyebrow">Meta</span>
            <ul className="mt-4 space-y-2 text-sm text-ink-muted">
              <li>Sales Alchemist · v1.0</li>
              <li>Solutions Engineer portfolio</li>
              <li>Last updated — today</li>
            </ul>
          </div>
          <div>
            <span className="eyebrow">Contact</span>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              <li>
                <a href="mailto:mehadave2@gmail.com" className="link-underline" data-cursor="link">
                  mehadave2@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-ink-muted">
                <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-ring" />
                <span className="eyebrow">Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Huge outline wordmark */}
        <div className="relative mt-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif-display text-[22vw] font-medium leading-[0.85] text-ink"
            style={{
              WebkitTextStroke: '1px var(--ink)',
              color: 'transparent',
              letterSpacing: '-0.02em',
            }}
          >
            Meha Dave.
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t pt-6 text-xs md:flex-row md:items-center" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-4 text-ink-muted">
            <span className="font-mono-editorial">© {year} Meha Dave.</span>
            <span className="h-3 w-px" style={{ backgroundColor: 'var(--border)' }} />
            <span className="font-mono-editorial">All rights reserved.</span>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-accent"
            data-cursor="link"
          >
            <span className="font-mono-editorial uppercase tracking-[0.2em]">Back to top</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border transition-all group-hover:-translate-y-0.5" style={{ borderColor: 'var(--border)' }}>
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
