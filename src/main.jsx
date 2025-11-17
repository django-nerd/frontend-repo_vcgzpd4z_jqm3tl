import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import PlayDetail from './pages/PlayDetail'
import ArtDetail from './pages/ArtDetail'
import DevDetail from './pages/DevDetail'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/play/:slug" element={<PlayDetail />} />
        <Route path="/art/:slug" element={<ArtDetail />} />
        <Route path="/dev/:slug" element={<DevDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
