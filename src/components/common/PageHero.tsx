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
}

export const PageHero = ({
  eyebrow: _eyebrow,
  title,
  subtitle,
  breadcrumb,
  bgImage,
}: PageHeroProps) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 40)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative py-28 md:py-44 min-h-[480px] flex items-center bg-green-dark overflow-hidden">
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-green-dark/92 via-green-dark/60 to-green-dark/20" />

      <div
        className="relative z-10 max-w-[1200px] mx-auto px-6"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(22px)',
          transition: 'opacity 0.7s ease 0.05s, transform 0.7s ease 0.05s',
        }}
      >
        <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-5 leading-[1.08] max-w-[720px]">
          {title}
        </h1>
        <p className="text-[1rem] text-white/85 max-w-[560px] mb-8 leading-[1.78]">{subtitle}</p>
        <nav className="flex items-center gap-2.5 text-[0.82rem]">
          <Link
            to={ROUTES.HOME}
            className="text-gold hover:text-gold-light transition-colors font-medium"
          >
            Home
          </Link>
          <FaChevronRight className="text-[0.6rem] text-white/40" />
          <span className="text-white/60">{breadcrumb}</span>
        </nav>
      </div>
    </section>
  )
}
