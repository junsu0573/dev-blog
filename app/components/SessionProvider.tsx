'use client'

import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react'
import type { SessionProviderProps } from '@/types'

export default function SessionProvider({ children }: SessionProviderProps) {
  return (
    <NextAuthSessionProvider>
      {children}
    </NextAuthSessionProvider>
  )
}