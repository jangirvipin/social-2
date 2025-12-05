import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../components'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
