import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts'
import { Home, About, Services, CaseStudies, Pricing, Blog, Testimonials, Contact } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="case-studies/:id" element={<CaseStudies />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<Blog />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
