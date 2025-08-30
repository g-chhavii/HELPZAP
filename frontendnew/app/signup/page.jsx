import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function SignupPage() {
  return (
    <main className="bg-white text-black min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1">
        <div className="max-w-md mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">Sign up</h1>
          <form className="grid gap-4">
            <input className="input" placeholder="Full name" />
            <input className="input" placeholder="Email" type="email" />
            <input className="input" placeholder="Password" type="password" />
            <button className="btn btn-primary">Create account</button>
          </form>
          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <a href="/login" className="link">
              Log in
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
