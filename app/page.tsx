import Hero from '@/components/Hero'
import Features from '@/components/Features'
import About from '@/components/About'
import Stats from '@/components/Stats'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}

