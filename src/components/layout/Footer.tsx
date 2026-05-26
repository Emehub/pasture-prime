import { useState } from 'react'
import { Link } from 'react-router'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa6'
import { ROUTES } from '@/constants/routes'
import { APP } from '@/constants'

const quickLinks = [
  { to: ROUTES.HOME, label: 'Home' },
  { to: ROUTES.ABOUT, label: 'About Us' },
  { to: ROUTES.PRODUCTS, label: 'Products' },
  { to: ROUTES.SERVICES, label: 'Services' },
  { to: ROUTES.FARMERS, label: 'Our Farmers' },
  { to: ROUTES.CONTACT, label: 'Contact Us' },
]

const serviceLinks = [
  { to: '/services#aggregation', label: 'Poultry Aggregation' },
  { to: '/services#processing', label: 'Processing and Distribution' },
  { to: '/services#circular', label: 'Circular Processing' },
  { to: '/services#tailored', label: 'Tailored Processing' },
]

const socials = [
  { icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/share/18mh3dJw9o/' },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/pasture_prime2025?igsh=cmRiZmR5MGI5Z2V0',
  },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/pasture-prime-ltd/',
  },
]

export const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-green-dark text-white/80 pt-14">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_2fr] gap-10 mb-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/logo.jpeg"
              alt={APP.NAME}
              className="h-20 w-20 object-cover rounded-full shrink-0"
              style={{ mixBlendMode: 'screen' }}
            />
            <span className="font-display text-[1.25rem] font-bold text-white leading-tight">
              {APP.NAME}
            </span>
          </div>
          <p className="text-[0.9rem] leading-relaxed mb-6">
            Structured poultry aggregation, processing, and distribution, built on farmer
            partnerships and a zero-waste circular model.
          </p>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 text-[0.85rem] hover:bg-green-mid hover:border-green-mid hover:text-white transition-all"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white text-[0.9rem] font-bold uppercase tracking-widest mb-5">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-[0.88rem] text-white/65 hover:text-gold-light transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-[0.9rem] font-bold uppercase tracking-widest mb-5">
            Our Services
          </h4>
          <ul className="flex flex-col gap-2.5">
            {serviceLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-[0.88rem] text-white/65 hover:text-gold-light transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white text-[0.9rem] font-bold uppercase tracking-widest mb-3">
            Stay Updated
          </h4>
          <p className="text-[0.88rem] mb-5">
            Subscribe to our newsletter for updates on products, farmer stories, and industry news.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex rounded-lg overflow-hidden border border-white/20"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 bg-white/[0.08] text-white text-[0.88rem] outline-none placeholder:text-white/40"
            />
            <button
              type="submit"
              className="px-4 py-3 bg-green-mid text-white hover:bg-green-light transition-colors"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-between items-center gap-2 text-[0.82rem] text-white/50">
          <p>© {new Date().getFullYear()} Pasture Prime Ltd. All rights reserved.</p>
          <p>Designed with care for a sustainable food future.</p>
        </div>
      </div>
    </footer>
  )
}
