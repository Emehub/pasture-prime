import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { FaChevronRight } from 'react-icons/fa6'
import { ROUTES } from '@/constants/routes'

interface PageHeroProps {
  eyebrow?: string
  title: string
  subtitle: string
  breadcrumb: string
  bgImage?: string
  compact?: boolean
}

export const PageHero = ({
  eyebrow: _eyebrow,
  title,
  subtitle,
  breadcrumb,
  bgImage,
  compact = false,
}: PageHeroProps) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 40)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="bg-green-dark overflow-hidden">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 ${compact ? 'min-h-[280px]' : 'min-h-[340px]'}`}
      >
        {/* Left — text, respects the global container margin */}
        <div
          className={`flex flex-col justify-center px-6 lg:pr-16 ${compact ? 'pt-14 lg:pt-16 pb-10 lg:pb-12' : 'py-16 lg:py-20'}`}
          style={{
            paddingLeft: 'max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem))',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.65s ease 0.05s, transform 0.65s ease 0.05s',
          }}
        >
          <nav className="flex items-center gap-2 text-[0.78rem] mb-5">
            <Link
              to={ROUTES.HOME}
              className="text-gold hover:text-gold-light transition-colors font-medium"
            >
              Home
            </Link>
            <FaChevronRight className="text-[0.55rem] text-white/35" />
            <span className="text-white/55">{breadcrumb}</span>
          </nav>
          <h1 className="font-display text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-white mb-4 leading-[1.1]">
            {title}
          </h1>
          <p className="text-[0.95rem] text-white/80 leading-[1.75] max-w-[480px]">{subtitle}</p>
        </div>

        {/* Right — image bleeds to the full right edge */}
        {bgImage ? (
          <div className="relative hidden lg:block">
            <img
              src={bgImage}
              alt=""
              aria-hidden="true"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: 'center 25%' }}
            />
            {/* soft fade on the left edge to blend with the text panel */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-dark via-green-dark/30 to-transparent" />
          </div>
        ) : (
          <div className="hidden lg:block" />
        )}
      </div>
    </section>
  )
}
