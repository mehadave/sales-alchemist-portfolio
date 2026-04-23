import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const LINKS = [
  { label: 'About', href: '#about', n: '01' },
  { label: 'Work', href: '#projects', n: '02' },
  { label: 'Stack', href: '#skills', n: '03' },
  { label: 'Contact', href: '#contact', n: '04' },
]

function formatTime(d) {
  return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
}
function useLocalTime() {
  const [time, setTime] = useState(() => formatTime(new Date()))
  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(new Date())), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const time = useLocalTime()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? (theme === 'dark' ? 'rgba(10,10,10,0.72)' : 'rgba(245,244,240,0.72)') : 'transparent',
          backdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="group flex items-center gap-3" data-cursor="link">
            <span className="font-serif-display text-xl font-semibold text-ink">MD</span>
            <span className="hidden h-4 w-px md:block" style={{ backgroundColor: 'var(--border)' }} />
            <span className="eyebrow hidden md:inline">Sales Alchemist</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.map(l => (
              <li key={l.label}>
                <a href={l.href} className="group flex items-baseline gap-1.5 link-underline text-sm text-ink" data-cursor="link">
                  <span className="font-mono-editorial text-[10px] text-ink-dim">{l.n}</span>
                  <span>{l.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border px-3 py-1.5 lg:flex" style={{ borderColor: 'var(--border)' }}>
              <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-ring" />
              <span className="font-mono-editorial text-[10px] uppercase tracking-[0.2em] text-ink-muted">Available</span>
              <span className="h-3 w-px" style={{ backgroundColor: 'var(--border)' }} />
              <span className="font-mono-editorial text-[10px] tabular-nums text-ink-muted">{time}</span>
            </div>
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border text-ink-muted transition-colors hover:text-accent"
              style={{ borderColor: 'var(--border)' }}
              data-cursor="link"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              aria-label="Menu"
              onClick={() => setOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full border text-ink md:hidden"
              style={{ borderColor: 'var(--border)' }}
            >
              <Menu size={16} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-[61] flex h-full w-[82%] max-w-sm flex-col bg-app p-6 md:hidden"
              style={{ borderLeft: '1px solid var(--border)' }}
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-serif-display text-xl font-semibold text-ink">Menu</span>
                <button
                  aria-label="Close" onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border text-ink"
                  style={{ borderColor: 'var(--border)' }}
                ><X size={16} /></button>
              </div>
              <ul className="flex flex-col gap-1">
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: 'easeOut' }}
                  >
                    <a href={l.href} onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between border-b py-5"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      <span className="font-serif-display text-3xl text-ink">{l.label}</span>
                      <span className="font-mono-editorial text-xs text-ink-dim">{l.n}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto flex items-center justify-between pt-6">
                <span className="eyebrow">Local time</span>
                <span className="font-mono-editorial text-xs tabular-nums text-ink-muted">{time}</span>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
