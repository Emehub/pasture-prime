import { Link } from 'react-router'
import { Button, Container } from '@/components/common'
import { ROUTES } from '@/constants/routes'

export const NotFoundPage = () => (
  <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
    <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">404</p>
    <h1 className="text-4xl font-bold text-slate-900">Page not found</h1>
    <p className="max-w-md text-slate-600">
      The page you’re looking for doesn’t exist or has been moved.
    </p>
    <Link to={ROUTES.HOME}>
      <Button>Back to home</Button>
    </Link>
  </Container>
)
