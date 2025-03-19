import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan fitur keranjang belanja, pembayaran, dan manajemen produk.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    imageUrl: '/projects/ecommerce.jpg'
  },
  {
    id: 2,
    title: 'Blog CMS',
    description: 'Sistem manajemen konten blog dengan editor rich text dan analitik.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    imageUrl: '/projects/blog-cms.jpg'
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: 'Dashboard analitik real-time dengan visualisasi data interaktif.',
    tech: ['Vue.js', 'D3.js', 'Firebase', 'Tailwind CSS'],
    imageUrl: '/projects/dashboard.jpg'
  }
]

export default function WebDevelopmentPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#8B4513] mb-8">Web Development Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">{project.title}</h3>
              <p className="text-[#5c4332] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#f5e6d3] text-[#8B4513] rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 