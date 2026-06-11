import type { Metadata } from 'next'
import { Bebas_Neue, Barlow_Condensed, Outfit } from 'next/font/google'
import './globals.css'
import Cursor from '@/components/Cursor/Cursor'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
})

const outfit = Outfit({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Slingshot Sports — Engineered For Wind',
  description:
    'Premium kiteboarding gear engineered for riders who push beyond limits. Kites, boards, foils and more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="nl"
      className={`${bebasNeue.variable} ${barlowCondensed.variable} ${outfit.variable}`}
    >
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  )
}
