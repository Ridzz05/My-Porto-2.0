'use client'

import { motion } from 'framer-motion'

export const HeroSection = () => {
  return (
    <section id="home" className="container mx-auto px-4 py-16 md:py-24">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-2xl md:text-3xl text-[#8B4513]/80 mb-4 font-quicksand"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hai! Saya Rizki 👋
        </motion.h2>
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-[#8B4513] mb-8 font-montserrat leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Full Stack Developer
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-[#5c4332] max-w-2xl mx-auto font-quicksand leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Seorang pengembang web yang bersemangat dalam menciptakan solusi digital yang inovatif. 
          Dengan pengalaman dalam pengembangan aplikasi web modern, saya menggabungkan kreativitas 
          dengan keahlian teknis untuk menghasilkan produk yang berkualitas tinggi.
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="bg-[#8B4513] text-white px-10 py-4 rounded-full text-lg font-quicksand hover:bg-[#723a0f] transition-colors duration-300 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const projectsSection = document.getElementById('project');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Lihat Project Saya
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
} 