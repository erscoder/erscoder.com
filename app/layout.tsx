import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kike Rubio | Web3 & Blockchain Engineer',
  description: '19+ years crafting digital experiences. Specialized in Web3, Blockchain, Solana, Ethereum, and DeFi. Building the decentralized future.',
  keywords: ['Web3', 'Blockchain', 'Solana', 'Ethereum', 'DeFi', 'Software Engineer', 'TypeScript', 'Node.js'],
  authors: [{ name: 'Enrique Rubio Sánchez' }],
  openGraph: {
    title: 'Kike Rubio | Web3 & Blockchain Engineer',
    description: '19+ years crafting digital experiences. Specialized in Web3, Blockchain, and DeFi.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@kikerub',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-dark-900 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
