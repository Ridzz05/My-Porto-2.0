'use client'

import { motion } from 'framer-motion'

export const HomeSection = () => {
  return (
    <section id="home" className="container mx-auto px-4 py-8 md:py-12">
      <motion.div 
        className="text-center mb-12 md:mb-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-3 md:mb-4 font-montserrat">
          Selamat Datang di Portfolio Saya
        </h1>
        <p className="text-base md:text-lg text-[#5c4332] max-w-2xl mx-auto font-quicksand">
          Temukan berbagai proyek dan karya terbaik yang telah saya kerjakan dalam perjalanan profesional saya.
        </p>
      </motion.div>
    </section>
  )
} 