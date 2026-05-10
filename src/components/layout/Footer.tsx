import { Container } from '@/components/common'
import { APP } from '@/constants'

export const Footer = () => (
  <footer className="border-t border-slate-200 bg-white">
    <Container className="flex h-16 items-center justify-between text-sm text-slate-500">
      <p>
        © {new Date().getFullYear()} {APP.NAME}. All rights reserved.
      </p>
      <p>Built by {APP.AUTHOR}</p>
    </Container>
  </footer>
)
