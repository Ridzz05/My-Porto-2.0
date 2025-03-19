import Image from 'next/image'

const mobileApps = [
  {
    id: 1,
    title: 'Fitness Tracker',
    description: 'Aplikasi pelacak kebugaran dengan fitur pencatatan latihan, nutrisi, dan analisis kemajuan.',
    platform: ['Android', 'iOS'],
    tech: ['React Native', 'Redux', 'Firebase'],
    imageUrl: '/projects/fitness-app.jpg'
  },
  {
    id: 2,
    title: 'Food Delivery',
    description: 'Aplikasi pengiriman makanan dengan sistem pemesanan real-time dan pelacakan pengiriman.',
    platform: ['Android'],
    tech: ['Kotlin', 'Firebase', 'Google Maps API'],
    imageUrl: '/projects/food-delivery.jpg'
  },
  {
    id: 3,
    title: 'Travel Guide',
    description: 'Panduan perjalanan dengan fitur peta offline, rekomendasi tempat, dan perencanaan perjalanan.',
    platform: ['iOS'],
    tech: ['Swift', 'CoreData', 'MapKit'],
    imageUrl: '/projects/travel-guide.jpg'
  }
]

export default function MobileAppsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#8B4513] mb-8">Mobile Applications</h1>
      <div className="space-y-8">
        {mobileApps.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="md:flex">
              <div className="md:w-1/3 relative h-64 md:h-auto">
                <Image
                  src={app.imageUrl}
                  alt={app.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <h3 className="text-2xl font-semibold text-[#8B4513] mb-2">{app.title}</h3>
                <p className="text-[#5c4332] mb-4">{app.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-[#8B4513] mb-2">Platform:</h4>
                    <div className="flex gap-2">
                      {app.platform.map((platform, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#f5e6d3] text-[#8B4513] rounded-full text-sm"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#8B4513] mb-2">Teknologi:</h4>
                    <div className="flex flex-wrap gap-2">
                      {app.tech.map((tech, index) => (
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 