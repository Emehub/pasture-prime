import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router'
import {
  FaChevronDown,
  FaBars,
  FaXmark,
  FaArrowRight,
  FaTractor,
  FaIndustry,
  FaRecycle,
  FaGears,
} from 'react-icons/fa6'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/lib/cn'

const serviceLinks = [
  {
    href: '/services#aggregation',
    icon: FaTractor,
    label: 'Poultry Aggregation',
    desc: 'Farm-gate collection with fair off-take pricing',
  },
  {
    href: '/services#processing',
    icon: FaIndustry,
    label: 'Processing & Distribution',
    desc: 'Certified hygienic processing and cold chain',
  },
  {
    href: '/services#circular',
    icon: FaRecycle,
    label: 'Circular Model',
    desc: 'Zero-waste by-product valorisation',
  },
  {
    href: '/services#tailored',
    icon: FaGears,
    label: 'Tailored Processing',
    desc: 'Fee-based facility access for large farms',
  },
]

const navLinks = [
  { to: ROUTES.HOME, label: 'Home', end: true },
  { to: ROUTES.ABOUT, label: 'About Us', end: false },
  { to: ROUTES.PRODUCTS, label: 'Products', end: false },
  { to: ROUTES.FARMERS, label: 'Our Farmers', end: false },
  { to: ROUTES.CONTACT, label: 'Contact Us', end: false },
]

const linkCls = ({ isActive }: { isActive: boolean }) =>
  cn(
    'px-3.5 py-2 rounded-lg text-[0.9rem] font-medium transition-all whitespace-nowrap',
    isActive
      ? 'text-green-mid bg-green-pale'
      : 'text-bgray-800 hover:text-green-mid hover:bg-green-pale',
  )

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [svcOpen, setSvcOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'bg-white border-b border-bgray-200 transition-shadow',
        isScrolled && 'shadow-md',
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between py-1.5 gap-6">
        {/* Logo */}
        <Link to={ROUTES.HOME} className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/logo.jpeg"
            alt="Pasture Prime Ltd"
            className="h-[100px] w-auto object-contain rounded-md mix-blend-multiply"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1.5 flex-1 justify-center">
          <NavLink to={ROUTES.HOME} end className={linkCls}>
            Home
          </NavLink>
          <NavLink to={ROUTES.ABOUT} className={linkCls}>
            About Us
          </NavLink>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <NavLink
              to={ROUTES.SERVICES}
              className={({ isActive }) =>
                cn(
                  'px-3.5 py-2 rounded-lg text-[0.9rem] font-medium transition-all flex items-center gap-1.5',
                  isActive
                    ? 'text-green-mid bg-green-pale'
                    : 'text-bgray-800 hover:text-green-mid hover:bg-green-pale',
                )
              }
            >
              Services
              <FaChevronDown
                className={cn(
                  'text-[0.6rem] transition-transform duration-300',
                  svcOpen && 'rotate-180',
                )}
              />
            </NavLink>

            {/* Dropdown panel */}
            <div
              className={cn(
                'absolute top-full left-0 bg-white border border-bgray-100 rounded-xl shadow-2xl w-[310px] p-2 transition-all duration-200 z-50',
                svcOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2',
              )}
            >
              {serviceLinks.map((s) => {
                const Icon = s.icon
                return (
                  <Link
                    key={s.href}
                    to={s.href}
                    onClick={() => setSvcOpen(false)}
                    className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-green-pale group/item transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-green-pale group-hover/item:bg-green-mid flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                      <Icon className="text-green-mid group-hover/item:text-white text-xs transition-colors" />
                    </div>
                    <div>
                      <p className="text-[0.875rem] font-semibold text-bgray-800 group-hover/item:text-green-mid transition-colors leading-snug">
                        {s.label}
                      </p>
                      <p className="text-[0.76rem] text-bgray-400 mt-0.5 leading-snug">{s.desc}</p>
                    </div>
                  </Link>
                )
              })}
              <div className="border-t border-bgray-100 mt-1 pt-2">
                <Link
                  to={ROUTES.SERVICES}
                  onClick={() => setSvcOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-[0.84rem] font-semibold text-green-mid hover:bg-green-pale transition-all group/all"
                >
                  <span>View All Services</span>
                  <FaArrowRight
                    size={10}
                    className="group-hover/all:translate-x-0.5 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>

          <NavLink to={ROUTES.PRODUCTS} className={linkCls}>
            Products
          </NavLink>
          <NavLink to={ROUTES.FARMERS} className={linkCls}>
            Our Farmers
          </NavLink>
          <NavLink to={ROUTES.CONTACT} className={linkCls}>
            Contact Us
          </NavLink>
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact#message"
            className="hidden lg:inline-block px-5 py-2.5 bg-green-mid text-white rounded-lg text-[0.88rem] font-semibold hover:bg-green-dark transition-colors whitespace-nowrap"
          >
            Get a Quote
          </Link>
          <button
            className="lg:hidden p-1.5 text-bgray-800"
            onClick={() => setIsOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-bgray-200 bg-white px-6 py-4 flex flex-col gap-1 shadow-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setIsOpen(false)}
              className={linkCls}
            >
              {link.label}
            </NavLink>
          ))}

          {/* Mobile services sub-list */}
          <div className="mt-1 border-t border-bgray-100 pt-3">
            <p className="text-[0.72rem] font-semibold text-bgray-400 uppercase tracking-widest mb-2 px-1">
              Services
            </p>
            {serviceLinks.map((s) => {
              const Icon = s.icon
              return (
                <Link
                  key={s.href}
                  to={s.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-[0.88rem] text-bgray-800 hover:bg-green-pale hover:text-green-mid transition-all"
                >
                  <Icon className="text-green-mid text-sm flex-shrink-0" />
                  {s.label}
                </Link>
              )
            })}
          </div>

          <Link
            to="/contact#message"
            onClick={() => setIsOpen(false)}
            className="mt-3 px-5 py-2.5 bg-green-mid text-white rounded-lg text-[0.88rem] font-semibold text-center hover:bg-green-dark transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  )
}
