import { useParams, Link } from 'react-router-dom'
import { getPlayBySlug } from '../data'

export default function PlayDetail() {
  const { slug } = useParams()
  const play = getPlayBySlug(slug)

  if (!play) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-xl w-full text-center">
          <h1 className="text-2xl font-bold">Play not found</h1>
          <p className="text-gray-600 mt-2">We couldn't find that play. It may have been moved or renamed.</p>
          <Link to="/" className="inline-block mt-6 px-4 py-2 rounded-md bg-gray-900 text-white">Go Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link to="/" className="text-sm text-gray-700 hover:text-gray-900">← Back</Link>
          <span className="text-sm text-gray-400">/</span>
          <span className="text-sm text-gray-700">Play</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {play.image && (
            <img src={play.image} alt={play.title} className="rounded-xl border w-full h-72 object-cover" />
          )}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">{play.title}</h1>
            <p className="text-gray-700 mt-3">{play.description}</p>

            {play.cast && (
              <div className="mt-6">
                <h2 className="text-lg font-semibold">Cast Requirements</h2>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  {play.cast.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}

            {play.accolades && play.accolades.length > 0 && (
              <div className="mt-6">
                <h2 className="text-lg font-semibold">Accolades</h2>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  {play.accolades.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>
            )}

            {play.links && play.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {play.links.map((l, i) => (
                  <a key={i} href={l.href} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-md bg-gray-900 text-white text-sm hover:bg-gray-800">{l.label}</a>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
