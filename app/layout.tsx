import type { Metadata } from 'next'
import { DM_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'

const mono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' })
const display = Playfair_Display({ subsets: ['latin'], style: ['normal', 'italic'], weight: ['500'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Still Forms — Photography by Mara Vale',
  description: 'Quiet observations, carefully framed.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${mono.variable} ${display.variable}`}>{children}</body></html>
}
