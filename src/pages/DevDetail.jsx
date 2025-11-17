import { useParams, Link } from 'react-router-dom'
import { getDevBySlug } from '../data'

export default function DevDetail() {
  const { slug } = useParams()
  const item = getDevBySlug(slug)

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-xl w-full text-center">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <p className="text-gray-600 mt-2">We couldn't find that development project.</p>
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
          <span className="text-sm text-gray-700">Dev</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {item.image && (
            <img src={item.image} alt={item.title} className="rounded-xl border w-full h-72 object-cover" />
          )}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">{item.title}</h1>
            <p className="text-gray-700 mt-3">{item.description}</p>
            <div className="mt-6 flex gap-3">
              {item.demo && (
                <a href={item.demo} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-md bg-gray-900 text-white text-sm hover:bg-gray-800">Live</a>
              )}
              {item.repo && (
                <a href={item.repo} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-md bg-gray-100 text-gray-900 text-sm hover:bg-gray-200 border">Code</a>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
