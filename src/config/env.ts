import { z } from 'zod'

const envSchema = z.object({
  APP_NAME: z.string().default('Cliftech React'),
  MODE: z.enum(['development', 'production', 'test']).default('development'),
})

const parsed = envSchema.safeParse({
  APP_NAME: import.meta.env.VITE_APP_NAME,
  MODE: import.meta.env.MODE,
})

if (!parsed.success) {
  console.error('Invalid environment variables:', parsed.error.flatten().fieldErrors)
  throw new Error('Invalid environment variables — check your .env file')
}

export const env = parsed.data
export const isDev = env.MODE === 'development'
export const isProd = env.MODE === 'production'
