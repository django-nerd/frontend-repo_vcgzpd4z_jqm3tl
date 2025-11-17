import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-end pb-16">
        <div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">Playful. Modern. You.</span>
          </h1>
          <p className="mt-4 text-gray-700 max-w-2xl">
            A personal portfolio showcasing my worlds as a playwright, artist, and web developer. Scroll to explore.
          </p>
          <a href="#playwright" className="mt-6 inline-block px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">Start Exploring</a>
        </div>
      </div>
    </section>
  )
}
