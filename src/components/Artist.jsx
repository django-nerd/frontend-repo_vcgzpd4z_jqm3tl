import { Link } from 'react-router-dom'
import { art as artData } from '../data'

export default function Artist({ projects = artData }) {
  return (
    <section id="artist" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Artist</h2>
          <p className="text-gray-600 mt-2 max-w-3xl">A collection of visual and conceptual art projects. Click a card to see more.</p>
        </div>

        {projects.length === 0 ? (
          <p className="text-gray-600">No art projects linked yet. Share your links and I’ll wire them up.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Link key={p.slug} to={`/art/${p.slug}`} className="group block rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                {p.image && (
                  <img src={p.image} alt={p.title} className="h-44 w-full object-cover" />
                )}
                <div className="p-5">
                  <h3 className="text-lg font-semibold group-hover:underline underline-offset-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{p.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
