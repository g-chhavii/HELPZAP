import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function LoginPage() {
  return (
    <main className="bg-white text-black min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1">
        <div className="max-w-md mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">Log in</h1>
          <form className="grid gap-4">
            <input className="input" placeholder="Email" type="email" />
            <input className="input" placeholder="Password" type="password" />
            <button className="btn btn-primary">Log in</button>
          </form>
          <p className="mt-4 text-sm">
            Don’t have an account?{" "}
            <a href="/signup" className="link">
              Sign up
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
