import { Link } from 'react-router-dom'
import { plays as playData } from '../data'

export default function Playwright({ plays = playData }) {
  return (
    <section id="playwright" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Playwright</h2>
          <p className="text-gray-600 mt-2 max-w-3xl">Highlights of original plays with descriptions, cast needs, visuals, and accolades.</p>
        </div>

        {plays.length === 0 ? (
          <p className="text-gray-600">No plays added yet. I can populate these once you share titles, blurbs, images, cast requirements, and accolades.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plays.map((p) => (
              <Link to={`/play/${p.slug}`} key={p.slug} className="group rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                {p.image && (
                  <img src={p.image} alt={p.title} className="h-40 w-full object-cover" />
                )}
                <div className="p-5">
                  <h3 className="text-lg font-semibold group-hover:underline underline-offset-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{p.description}</p>
                  {p.cast && (
                    <div className="mt-3">
                      <h4 className="text-sm font-medium">Cast Requirements</h4>
                      <ul className="mt-1 list-disc list-inside text-sm text-gray-700">
                        {p.cast.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {p.accolades && p.accolades.length > 0 && (
                    <div className="mt-3">
                      <h4 className="text-sm font-medium">Accolades</h4>
                      <ul className="mt-1 list-disc list-inside text-sm text-gray-700">
                        {p.accolades.map((a, i) => (
                          <li key={i}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
