import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function PostTaskPage() {
  return (
    <main className="bg-white text-black min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">Post a Task</h1>
          <form className="grid gap-4">
            <input className="input" placeholder="Task title" />
            <textarea className="input min-h-32" placeholder="Describe what you need" />
            <div className="grid grid-cols-2 gap-3">
              <input className="input" placeholder="Location" />
              <input className="input" placeholder="Budget" />
            </div>
            <button className="btn btn-primary w-fit">Submit task</button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  )
}
