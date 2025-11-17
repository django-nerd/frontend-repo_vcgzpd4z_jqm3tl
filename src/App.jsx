import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Playwright from './components/Playwright'
import Artist from './components/Artist'
import Developer from './components/Developer'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gradient-to-b from-white to-slate-50">
      <Navbar />
      <Hero />
      <Playwright />
      <Artist />
      <Developer />
      <Footer />
    </div>
  )
}

export default App
