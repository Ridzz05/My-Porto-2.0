'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'

// Schema validasi
const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  message: yup.string().required()
})

type FormData = yup.InferType<typeof schema>

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onTouched'
  })

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      const subject = `Pesan dari ${data.name} via Portfolio Website`
      const body = `Nama: ${data.name}
Email: ${data.email}

Pesan:
${data.message}`

      const mailtoLink = `mailto:muhrizkialghipari@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoLink
      
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

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
        className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#8B4513] mb-2 font-quicksand">
                Nama
              </label>
              <input
                type="text"
                id="name"
                autoComplete="name"
                className={`w-full px-4 py-2 rounded-xl border focus:outline-none transition-colors duration-200
                  ${errors.name 
                    ? 'border-red-500 focus:border-red-500 bg-red-50' 
                    : 'border-[#8B4513]/20 focus:border-[#8B4513] bg-white/50'
                  }`}
                placeholder="Masukkan nama Anda"
                {...register('name')}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#8B4513] mb-2 font-quicksand">
                Email
              </label>
              <input
                type="email"
                id="email"
                autoComplete="email"
                className={`w-full px-4 py-2 rounded-xl border focus:outline-none transition-colors duration-200
                  ${errors.email 
                    ? 'border-red-500 focus:border-red-500 bg-red-50' 
                    : 'border-[#8B4513]/20 focus:border-[#8B4513] bg-white/50'
                  }`}
                placeholder="Masukkan email Anda"
                {...register('email')}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#8B4513] mb-2 font-quicksand">
                Pesan
              </label>
              <textarea
                id="message"
                rows={4}
                className={`w-full px-4 py-2 rounded-xl border focus:outline-none transition-colors duration-200
                  ${errors.message 
                    ? 'border-red-500 focus:border-red-500 bg-red-50' 
                    : 'border-[#8B4513]/20 focus:border-[#8B4513] bg-white/50'
                  }`}
                placeholder="Tulis pesan Anda di sini"
                {...register('message')}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className={`w-full py-3 px-4 rounded-xl transition-all duration-200 font-quicksand flex items-center justify-center
              ${isSubmitting 
                ? 'bg-[#8B4513]/70 cursor-not-allowed' 
                : 'bg-[#8B4513] hover:bg-[#723a0f]'} text-white`}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Membuka Aplikasi Email...
              </span>
            ) : (
              'Kirim Pesan'
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
} 