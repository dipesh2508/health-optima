import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/shared/NavBar'
import FootBar from '@/components/shared/FootBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Health Optima',
  description: 'Your Ultimate Health and Wellness Companion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <FootBar /></body>
    </html>
  )
}
