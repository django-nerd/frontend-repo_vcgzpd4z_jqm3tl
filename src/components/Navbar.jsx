import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const items = [
    { href: '#playwright', label: 'Playwright' },
    { href: '#artist', label: 'Artist' },
    { href: '#developer', label: 'Developer' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-white/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="text-xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">My Portfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              {it.label}
            </a>
          ))}
          <a href="#contact" className="text-sm font-medium px-3 py-1.5 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-colors">Contact</a>
        </nav>
        <button className="md:hidden p-2 rounded-md hover:bg-black/5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu size={20} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/80 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            {items.map((it) => (
              <a key={it.href} href={it.href} className="text-sm text-gray-700" onClick={() => setOpen(false)}>
                {it.label}
              </a>
            ))}
            <a href="#contact" className="text-sm font-medium px-3 py-1.5 rounded-md bg-gray-900 text-white w-max" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
