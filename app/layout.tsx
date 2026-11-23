import type { Metadata, Viewport } from 'next'
import { Anybody, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const display = Anybody({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-display',
})
const sans = Hanken_Grotesk({ subsets: ['latin'], display: 'swap', variable: '--font-sans' })
const mono = JetBrains_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-mono' })

const title = 'Enrique Rubio - Software Lead, AI-augmented engineering'
const description =
  'Software Lead at VRANDED and founder of ErsLabs. 20+ years building production platforms in B2B SaaS, fintech and Web3, delivered with a multi-agent engineering pipeline.'

export const metadata: Metadata = {
  metadataBase: new URL('https://erscoder.com'),
  title,
  description,
  alternates: { canonical: '/' },
  authors: [{ name: 'Enrique Rubio Sánchez', url: 'https://erscoder.com' }],
  openGraph: {
    type: 'website',
    url: 'https://erscoder.com',
    siteName: 'Enrique Rubio',
    title,
    description,
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Enrique Rubio, Software Lead' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0b0c0c' },
    { media: '(prefers-color-scheme: light)', color: '#0b0c0c' },
  ],
}

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Enrique Rubio Sánchez',
  url: 'https://erscoder.com',
  jobTitle: 'Software Lead',
  worksFor: { '@type': 'Organization', name: 'VRANDED' },
  email: 'mailto:enrique.rubio.developer@gmail.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Madrid', addressCountry: 'ES' },
  sameAs: ['https://github.com/erscoder', 'https://www.linkedin.com/in/enriquerubiosanchez/', 'https://erslabs.net'],
}

// Applies a stored theme choice before first paint. Dark is the default.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
