export default function Footer() {
  return (
    <footer id="contact" className="py-12 bg-slate-950 text-slate-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm/6 opacity-80">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="mailto:you@example.com" className="hover:text-white">Email</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
