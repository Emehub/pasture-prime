import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { FaChevronUp } from 'react-icons/fa6'
import { Topbar } from './Topbar'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { cn } from '@/lib/cn'

export const MainLayout = () => {
  const [showTop, setShowTop] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col text-brand-text">
      <header className="sticky top-0 z-50">
        <Topbar />
        <Navbar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={cn(
          'fixed bottom-7 right-7 z-40 w-11 h-11 bg-green-mid text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 text-[0.9rem]',
          showTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-3 pointer-events-none',
        )}
      >
        <FaChevronUp />
      </button>
    </div>
  )
}
