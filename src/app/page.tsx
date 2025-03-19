import { ProjectSection } from './components/ProjectSection'
import { ContactSection } from './components/ContactSection'
import { HeroSection } from './components/HeroSection'
import { projects } from './data/projects'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <HeroSection />
        <ProjectSection projects={projects} />
        <ContactSection />
      </div>
    </main>
  )
}

