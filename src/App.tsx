
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Header } from './pages/home/Header'
import { Footer } from './pages/home/Footer'
import { ProjectPage } from './pages/project'

export function App() {

  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Home  />} />
    <Route path="/about" element={<About />} />
    <Route path="/project" element={<ProjectPage />} />
  </Routes>
  <Footer />
  </>
  )
}

