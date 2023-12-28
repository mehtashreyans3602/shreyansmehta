import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Header/Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'shreyansmehta',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
        {children}
        </main>
      </body>
    </html>
  )
}
