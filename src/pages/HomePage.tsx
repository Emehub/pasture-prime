import { Container } from '@/components/common'
import { APP } from '@/constants'

export const HomePage = () => (
  <Container className="py-16">
    <div className="flex flex-col items-center gap-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Welcome to {APP.NAME}
      </h1>
      <p className="max-w-xl text-base text-slate-600">{APP.DESCRIPTION}</p>
    </div>
  </Container>
)
