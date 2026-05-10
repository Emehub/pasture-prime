export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  NOT_FOUND: '*',
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
