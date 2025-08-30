export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/images/helpzap-logo.jpg" alt="HELPZAP" className="h-7 w-auto" />
          <span className="font-semibold">HELPZAP</span>
        </div>
        <nav className="flex items-center gap-5 text-sm">
          <a href="#about" className="footer-link">
            About
          </a>
          <a href="#how" className="footer-link">
            How it Works
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
          <a href="/login" className="footer-link">
            Login
          </a>
          <a href="/signup" className="footer-link">
            Sign up
          </a>
        </nav>
        <p className="text-xs text-black/60">© {new Date().getFullYear()} Helpzap</p>
      </div>
    </footer>
  )
}
