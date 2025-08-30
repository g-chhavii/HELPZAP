"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === "/" || pathname === "/page"

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="sr-only">HelpZap Home</span>
          <img src="/images/helpzap-logo.jpg" alt="HelpZap logo" className="h-8 w-auto" />
          <img
            src="/images/hero-woman.jpg"
            alt="HelpZap brand character"
            className="h-8 w-8 object-cover brand-avatar"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {isHome ? (
            <>
              <a
                href="#about"
                className="nav-link relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#4442dd] hover:after:w-full after:transition-all"
              >
                About Us
              </a>
              <a
                href="#how"
                className="nav-link relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#4442dd] hover:after:w-full after:transition-all"
              >
                How It Works
              </a>
              <a
                href="#contact"
                className="nav-link relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#4442dd] hover:after:w-full after:transition-all"
              >
                Contact Us
              </a>
            </>
          ) : (
            <Link href="/" className="nav-link">
              Home
            </Link>
          )}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login" className="btn btn-ghost hover:shadow-sm active:scale-95 transition">
            Log in
          </Link>
          <Link href="/signup" className="btn btn-primary hz-cta">
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  )
}
