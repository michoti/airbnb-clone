import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Modal from '@/components/modals/Modal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb clone',
  description: 'Airbnb clone next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Modal actionLabel='submit' title='testingg' isOpen />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
