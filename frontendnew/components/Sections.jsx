export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h3 className="section-title">
          <span className="hz-section-chip">About Us</span>
        </h3>
        <p className="section-text">
          Ever had a small emergency but no one to call? Imagine: Your dog needs walking during a late meeting, or you
          need a last-minute grocery run while sick. The panic of finding help is real. Now imagine: You’re a student
          with a free hour, eager to earn—but no one knows you’re available. Your time and willingness go wasted, right
          in your own community. Helpzap bridges these moments—connecting neighbors who need help with trusted helpers
          nearby.
        </p>
      </div>
    </section>
  )
}

export function HowItWorksSection() {
  return (
    <section id="how" className="section alt">
      <div className="container">
        <h3 className="section-title">
          <span className="hz-section-chip">How It Works</span>
        </h3>
        <ol className="list">
          <li>
            <span className="badge">1</span> Post a task or browse tasks around you.
          </li>
          <li>
            <span className="badge">2</span> Match with nearby, verified helpers.
          </li>
          <li>
            <span className="badge">3</span> Chat, confirm, and get it done—fast and safely.
          </li>
        </ol>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h3 className="section-title">
          <span className="hz-section-chip">Contact Us</span>
        </h3>
        <form className="grid gap-4 max-w-xl">
          <input aria-label="Your name" className="input" placeholder="Your name" />
          <input aria-label="Your email" className="input" placeholder="Email" type="email" />
          <textarea aria-label="Your message" className="input min-h-32" placeholder="Message" />
          <button type="submit" className="btn btn-primary hz-cta w-fit">
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}
