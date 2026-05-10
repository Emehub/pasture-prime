import type { ReactNode } from 'react'

export type WithChildren<T = object> = T & { children: ReactNode }
export type Nullable<T> = T | null
export type Maybe<T> = T | undefined
export type ValueOf<T> = T[keyof T]
