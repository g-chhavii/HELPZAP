export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* Left: brand logo + copy */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5">
            <img
              src="/images/helpzap-logo.jpg"
              alt="HelpZap logo"
              className="hz-float anim-pop w-[240px] md:w-[320px] h-auto object-contain select-none hover:scale-[1.02] transition-transform duration-300"
            />
            <h1 className="text-3xl md:text-5xl font-extrabold text-black text-balance">When you need instant help</h1>
            <p className="text-base md:text-lg text-black/80 leading-relaxed max-w-xl">
              Experienced and trustworthy on-demand service providers.
            </p>
            <div className="flex gap-3 pt-1">
              <a href="#about" className="btn btn-primary hz-cta">
                Learn more
              </a>
              <a href="#how" className="btn btn-ghost hover:shadow-sm active:scale-95 transition">
                How it works
              </a>
            </div>
          </div>

          {/* Right: large girl illustration */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/hero-woman.jpg"
              alt="Person using phone"
              className="hz-float anim-pop w-[75%] max-w-[520px] md:w-full md:max-w-[520px] h-auto object-contain select-none drop-shadow-md hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
