import Image from 'next/image'

const designs = [
  {
    id: 1,
    title: 'Financial App Redesign',
    description: 'Redesign aplikasi keuangan dengan fokus pada pengalaman pengguna yang lebih baik dan antarmuka yang modern.',
    category: 'Mobile UI',
    tools: ['Figma', 'Protopie', 'Illustrator'],
    imageUrl: '/projects/finance-app.jpg'
  },
  {
    id: 2,
    title: 'E-learning Platform',
    description: 'Desain platform pembelajaran online dengan antarmuka yang intuitif dan sistem navigasi yang efisien.',
    category: 'Web Design',
    tools: ['Sketch', 'InVision', 'Photoshop'],
    imageUrl: '/projects/elearning.jpg'
  },
  {
    id: 3,
    title: 'Smart Home Dashboard',
    description: 'Dashboard kontrol rumah pintar dengan visualisasi data yang informatif dan kontrol yang mudah diakses.',
    category: 'Dashboard UI',
    tools: ['Figma', 'Adobe XD', 'Principle'],
    imageUrl: '/projects/smart-home.jpg'
  }
]

export default function DesignPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#8B4513] mb-8">UI/UX Design Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {designs.map((design) => (
          <div
            key={design.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-64">
              <Image
                src={design.imageUrl}
                alt={design.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-white/90 text-[#8B4513] rounded-full text-sm">
                  {design.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">{design.title}</h3>
              <p className="text-[#5c4332] mb-4">{design.description}</p>
              <div>
                <h4 className="text-sm font-semibold text-[#8B4513] mb-2">Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  {design.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#f5e6d3] text-[#8B4513] rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}