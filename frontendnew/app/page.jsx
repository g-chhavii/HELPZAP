import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import ActionTiles from "@/components/ActionTiles"
import Footer from "@/components/Footer"
import { AboutSection, HowItWorksSection, ContactSection } from "@/components/Sections"
import Chatbot from "@/components/Chatbot"

export default function Page() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <Hero />
      <Services />
      <ActionTiles />
      <AboutSection />
      <HowItWorksSection />
      <ContactSection />
      <Chatbot />
      <Footer />
    </main>
  )
}
