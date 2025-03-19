'use client'

import { motion } from 'framer-motion'

export const ContactSection = () => {
  return (
    <section id="contacts" className="container mx-auto px-4 py-8 md:py-12 mb-12 md:mb-20">
      <motion.h2 
        className="text-xl md:text-2xl font-bold text-[#8B4513] mb-6 md:mb-8 text-center font-montserrat"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hubungi Saya
      </motion.h2>

      <motion.div 
        className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Simple Border Animation */}
        <motion.div 
          className="absolute inset-0 rounded-2xl border-2 border-[#8B4513]/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        />

        <form className="space-y-4 md:space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label htmlFor="name" className="block text-sm font-medium text-[#8B4513] mb-2 font-quicksand">
              Nama
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] bg-white/50 transition-colors duration-200"
              placeholder="Masukkan nama Anda"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-[#8B4513] mb-2 font-quicksand">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] bg-white/50 transition-colors duration-200"
              placeholder="Masukkan email Anda"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-[#8B4513] mb-2 font-quicksand">
              Pesan
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] bg-white/50 transition-colors duration-200"
              placeholder="Tulis pesan Anda di sini"
            ></textarea>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#8B4513] text-white py-3 px-4 rounded-xl hover:bg-[#723a0f] transition-all duration-200 font-quicksand"
          >
            Kirim Pesan
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
} 