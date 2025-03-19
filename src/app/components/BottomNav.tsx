'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useEffect, useState } from 'react'

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up')
  const [prevOffset, setPrevOffset] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const toggleScrollDirection = () => {
      const scrollY = window.pageYOffset
      const currentScrollY = window.scrollY
      
      // Threshold untuk menentukan apakah scroll cukup signifikan
      const scrollThreshold = 5
      
      // Hanya update jika scroll lebih dari threshold
      if (Math.abs(currentScrollY - prevOffset) > scrollThreshold) {
        const newScrollDirection = currentScrollY > prevOffset ? 'down' : 'up'
        if (scrollDirection !== newScrollDirection) {
          setScrollDirection(newScrollDirection)
          setIsVisible(newScrollDirection === 'up')
        }
        setPrevOffset(currentScrollY)
      }
    }

    window.addEventListener('scroll', toggleScrollDirection)
    return () => window.removeEventListener('scroll', toggleScrollDirection)
  }, [prevOffset, scrollDirection])

  return isVisible
}

const socialLinks = [
  {
    name: 'GitHub',
    icon: <FaGithub size={22} className="md:w-6 md:h-6" />,
    href: 'https://github.com/YourGithubUsername'
  },
  {
    name: 'Instagram',
    icon: <FaInstagram size={22} className="md:w-6 md:h-6" />,
    href: 'https://instagram.com/YourInstagramUsername'
  },
  {
    name: 'Email',
    icon: <MdEmail size={22} className="md:w-6 md:h-6" />,
    href: 'mailto:your.email@example.com'
  }
]

export const BottomNav = () => {
  const isVisible = useScrollDirection()

  return (
    <>
      {/* Mobile Spacer */}
      <div className="h-16 md:hidden" />
      
      <motion.nav 
        className="fixed md:top-1/2 md:-translate-y-1/2 bottom-0 md:bottom-auto left-0 md:left-6 right-0 md:right-auto z-40 p-4 md:p-0 pointer-events-none"
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : 100,
          x: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-sm md:max-w-none mx-auto pointer-events-auto">
          <motion.div 
            className="flex md:flex-col items-center justify-center
            space-x-10 md:space-x-0 md:space-y-5
            h-12 md:h-auto md:py-5
            rounded-2xl bg-white/95 backdrop-blur-sm border border-[#8B4513]/10 shadow-sm px-6 md:px-4
            md:hover:translate-x-1 transition-transform duration-300"
            initial={false}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B4513] hover:text-[#723a0f] transition-all duration-300 relative group flex items-center"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                <span className="relative flex items-center justify-center w-8 h-8 md:w-9 md:h-9">
                  {link.icon}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.nav>
    </>
  )
} 