import type { Metadata } from 'next'
import { Montserrat, Quicksand } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

// Optimize font loading
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
})

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio Website',
}

// Move static styles to CSS file to reduce JS bundle
const overlayStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B4513' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  backgroundSize: '60px 60px'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${montserrat.variable} ${quicksand.variable}`}>
      <body className={`${montserrat.className} bg-[#fdf6e3] relative min-h-screen`}>
        {/* Pattern Overlay - Optimized with will-change */}
        <div className="fixed inset-0 z-0 opacity-10 will-change-transform">
          <div className="absolute inset-0" style={overlayStyle} />
        </div>

        {/* Gradient Overlay - Using CSS custom property for better performance */}
        <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-[#fdf6e3]/50 to-[#fdf6e3] opacity-80" />

        {/* Content - Using transform GPU acceleration */}
        <div className="relative z-10 overflow-x-hidden transform-gpu">
          <Navbar />
          <main className="min-h-screen backdrop-blur-sm relative">
            {children}
          </main>
        </div>

        {/* Corner Decorations - Optimized with CSS transforms */}
        <div className="fixed top-0 left-0 w-32 h-32 bg-[#8B4513] opacity-5 rounded-br-full -translate-x-16 -translate-y-16 transform-gpu" />
        <div className="fixed top-0 right-0 w-32 h-32 bg-[#8B4513] opacity-5 rounded-bl-full translate-x-16 -translate-y-16 transform-gpu" />
        <div className="fixed bottom-0 left-0 w-32 h-32 bg-[#8B4513] opacity-5 rounded-tr-full -translate-x-16 translate-y-16 transform-gpu" />
        <div className="fixed bottom-0 right-0 w-32 h-32 bg-[#8B4513] opacity-5 rounded-tl-full translate-x-16 translate-y-16 transform-gpu" />
      </body>
    </html>
  )
}
