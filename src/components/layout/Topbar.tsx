import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6'
import { APP } from '@/constants'

const topSocials = [
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

export const Topbar = () => (
  <div className="bg-green-dark text-white/85 text-sm py-2 hidden md:block">
    <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center flex-wrap gap-2">
      <div className="flex gap-5 flex-wrap">
        <a
          href={`tel:${APP.PHONE.replace(/\s/g, '')}`}
          className="flex items-center gap-1.5 text-white/85 hover:text-gold-light transition-colors"
        >
          <FaPhone className="text-xs" /> {APP.PHONE}
        </a>
        <a
          href={`mailto:${APP.EMAIL}`}
          className="flex items-center gap-1.5 text-white/85 hover:text-gold-light transition-colors"
        >
          <FaEnvelope className="text-xs" /> {APP.EMAIL}
        </a>
        <span className="flex items-center gap-1.5 text-white/85">
          <FaClock className="text-xs" /> {APP.HOURS}
        </span>
      </div>
      <div className="flex gap-3.5">
        {topSocials.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-6.5 h-6.5 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all text-xs"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  </div>
)
