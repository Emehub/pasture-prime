import { NavLink } from 'react-router'
import { Container } from '@/components/common'
import { APP } from '@/constants'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/lib/cn'

const links = [
  { to: ROUTES.HOME, label: 'Home' },
  { to: ROUTES.ABOUT, label: 'About' },
  { to: ROUTES.CONTACT, label: 'Contact' },
]

export const Navbar = () => (
  <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
    <Container className="flex h-16 items-center justify-between">
      <NavLink to={ROUTES.HOME} className="text-lg font-semibold text-slate-900">
        {APP.NAME}
      </NavLink>
      <nav className="flex items-center gap-6">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === ROUTES.HOME}
            className={({ isActive }) =>
              cn(
                'text-sm font-medium transition-colors',
                isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900',
              )
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </Container>
  </header>
)
