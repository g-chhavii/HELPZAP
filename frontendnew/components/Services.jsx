function Icon({ children }) {
  return (
    <div className="h-12 w-12 rounded-lg bg-[#4442dd]/10 text-[#4442dd] flex items-center justify-center">
      {children}
    </div>
  )
}

function Card({ title, children, desc }) {
  return (
    <div className="card anim-pop">
      <Icon>{children}</Icon>
      <h4 className="card-title">{title}</h4>
      <p className="card-text">{desc}</p>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h3 className="section-title">
          <span className="hz-section-chip">What we offer</span>
        </h3>
        <p className="text-black/80 mb-8 max-w-2xl">Quick help from your community in minutes.</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="group transition-transform hover:-translate-y-1">
            <Card title="Cleaning" desc="Home tidying, dishes, quick resets.">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 21l6-6" />
                <path d="M9 15l10-10" />
                <path d="M14 4l6 6" />
                <path d="M3 21h6v-2H5v-2H3v4z" />
              </svg>
            </Card>
          </div>

          <div className="group transition-transform hover:-translate-y-1">
            <Card title="Dog sitting" desc="Walks, feeding, check-ins.">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 12v6a3 3 0 003 3h6a3 3 0 003-3v-6" />
                <path d="M8 7h8l3 3-5 2H10L5 10l3-3z" />
                <circle cx="10" cy="9" r="1" />
              </svg>
            </Card>
          </div>

          <div className="group transition-transform hover:-translate-y-1">
            <Card title="Tutoring" desc="Homework help, exam prep.">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h14l2 3-2 3H4z" />
                <path d="M10 12v6" />
              </svg>
            </Card>
          </div>

          <div className="group transition-transform hover:-translate-y-1">
            <Card title="Errands" desc="Groceries, pharmacy runs, parcels.">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18" />
                <path d="M6 6l1 12h10l1-12" />
                <circle cx="9" cy="20" r="1.5" />
                <circle cx="15" cy="20" r="1.5" />
              </svg>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
