import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Copy, Check, ArrowUpRight } from 'lucide-react'
import MagneticButton from './MagneticButton'

const SOCIALS = [
  { icon: Github, href: 'https://github.com/mehadave', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/meha-dave/', label: 'LinkedIn' },
]

const EMAIL = 'mehadave2@gmail.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {}
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-32">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-16 flex items-center gap-4"
      >
        <span className="eyebrow text-accent">05 — Contact</span>
        <span className="h-px flex-1" style={{ backgroundColor: 'var(--border)' }} />
        <span className="eyebrow">Open to roles · Q2 2026</span>
      </motion.div>

      <div className="grid grid-cols-1 gap-20 md:grid-cols-12">
        {/* Display headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7"
        >
          <h2 className="font-serif-display text-6xl font-medium leading-[0.98] text-ink md:text-[128px]">
            Got a tough<br />
            customer <span className="italic text-accent">call?</span>
          </h2>
          <p className="mt-10 max-w-lg text-lg leading-relaxed text-ink-muted">
            Open to Solutions Engineering roles, pre-sales consulting, and PoC/integration contracts. If there's a prospect stuck on a technical "no," I'd love to help.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <MagneticButton
              as="a"
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
              data-cursor="link"
            >
              <Mail size={16} />
              Send a Message
              <ArrowUpRight size={16} />
            </MagneticButton>

            <button
              onClick={copy}
              className="inline-flex items-center gap-3 rounded-full border px-5 py-4 text-sm text-ink-muted transition-colors hover:text-ink"
              style={{ borderColor: 'var(--border-strong)' }}
              data-cursor="link"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span key="c" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="inline-flex items-center gap-2">
                    <Check size={14} className="text-accent" /> Copied
                  </motion.span>
                ) : (
                  <motion.span key="d" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="inline-flex items-center gap-2">
                    <Copy size={14} /> Copy email
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>

        {/* Side card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5"
        >
          <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
            <span className="eyebrow">Direct line</span>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-3 block font-serif-display text-3xl font-medium text-ink transition-colors hover:text-accent md:text-4xl"
              data-cursor="link"
            >
              {EMAIL}
            </a>

            <div className="my-8 h-px w-full" style={{ backgroundColor: 'var(--border)' }} />

            <span className="eyebrow">Elsewhere</span>
            <div className="mt-4 flex flex-col gap-1">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b py-3.5 text-ink transition-colors hover:text-accent"
                  style={{ borderColor: 'var(--border)' }}
                  data-cursor="link"
                >
                  <span className="flex items-center gap-3">
                    <s.icon size={16} />
                    <span className="text-base">{s.label}</span>
                  </span>
                  <ArrowUpRight size={14} className="text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </a>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2">
              <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-ring" />
              <span className="eyebrow">Replying within 24h</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
