import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function FindWorkPage() {
  return (
    <main className="bg-white text-black min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">Find Work</h1>
          <p className="text-black/80 mb-6">Browse tasks near you and start earning by helping your community.</p>
          <ul className="space-y-3">
            <li className="tile tile-outline">Grocery run • Downtown • ₹500</li>
            <li className="tile tile-outline">Dog walk • Park Area • ₹300</li>
            <li className="tile tile-outline">Math tutoring • Online • ₹800</li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  )
}
