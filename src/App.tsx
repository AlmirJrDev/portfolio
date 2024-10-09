
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { AboutPage } from './pages/about'
import { Header } from './pages/home/Header'
import { Footer } from './pages/home/Footer'
import { ProjectPage } from './pages/project'
import { ContactPage } from './pages/contact'

export function App() {

  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Home  />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/project" element={<ProjectPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
  <Footer />
  </>
  )
}

