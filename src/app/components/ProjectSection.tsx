'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Project } from '../data/projects'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="group h-full"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden border border-[#8B4513]/10 transition-all duration-300 hover:border-[#8B4513]/30 h-full flex flex-col">
        <div className="relative h-40 md:h-48 shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <motion.span 
            className="absolute top-3 right-3 md:top-4 md:right-4 px-2 md:px-3 py-1 bg-white/90 text-[#8B4513] text-xs rounded-full font-quicksand"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.category}
          </motion.span>
        </div>
        <div className="p-4 md:p-6 flex flex-col flex-grow">
          <h3 className="text-base md:text-lg font-semibold text-[#8B4513] mb-2 font-montserrat group-hover:text-[#723a0f] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-xs md:text-sm text-[#5c4332] mb-3 md:mb-4 font-quicksand line-clamp-2 flex-grow">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-0.5 md:py-1 bg-[#f5e6d3] text-[#8B4513] rounded-full font-quicksand"
              >
                {tech}
              </span>
            ))}
          </div>
          <motion.a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-[#8B4513] text-white rounded-xl text-sm font-medium font-quicksand hover:bg-[#723a0f] transition-all duration-200 shadow-sm hover:shadow group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Lihat Project</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                className="transform transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectSection = ({ projects }: { projects: Project[] }) => {
  return (
    <section id="project" className="container mx-auto px-4 py-8 md:py-12">
      <motion.h2 
        className="text-xl md:text-2xl font-bold text-[#8B4513] mb-8 md:mb-12 text-center font-montserrat"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        Project Yang Sudah Saya Buat
      </motion.h2>

      {/* Web Development Section */}
      <section id="web-development" className="mb-12 md:mb-20">
        <motion.h3 
          className="text-lg md:text-xl font-semibold text-[#8B4513] mb-4 md:mb-8 font-montserrat"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Web Development
        </motion.h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.filter(p => p.category === "Web Development").map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </section>

      {/* Mobile Apps Section */}
      <section id="mobile-apps" className="mb-12 md:mb-20">
        <motion.h3 
          className="text-lg md:text-xl font-semibold text-[#8B4513] mb-4 md:mb-8 font-montserrat"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Mobile Apps
        </motion.h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.filter(p => p.category === "Mobile Apps").map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </section>

      {/* UI/UX Design Section */}
      <section id="design" className="mb-12 md:mb-20">
        <motion.h3 
          className="text-lg md:text-xl font-semibold text-[#8B4513] mb-4 md:mb-8 font-montserrat"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          UI/UX Design
        </motion.h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.filter(p => p.category === "UI/UX Design").map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </section>
    </section>
  )
} 