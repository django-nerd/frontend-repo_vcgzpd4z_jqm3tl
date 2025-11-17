import { Link } from 'react-router-dom'
import { dev as devData } from '../data'

export default function Developer({ projects = devData }) {
  return (
    <section id="developer" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Web Developer</h2>
          <p className="text-gray-600 mt-2 max-w-3xl">Selected coding projects across web apps, experiments, and open-source contributions.</p>
        </div>

        {projects.length === 0 ? (
          <p className="text-gray-600">No coding projects added yet. Share repo links and live demos to feature them here.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Link to={`/dev/${p.slug}`} key={p.slug} className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden block">
                {p.image && <img src={p.image} alt={p.title} className="h-40 w-full object-cover" />}
                <div className="p-5">
                  <h3 className="text-lg font-semibold group-hover:underline underline-offset-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{p.description}</p>
                  <div className="mt-4 flex gap-3">
                    {p.demo && (
                      <span className="text-xs font-medium text-indigo-600">Has Live</span>
                    )}
                    {p.repo && (
                      <span className="text-xs font-medium text-gray-700">Has Code</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
