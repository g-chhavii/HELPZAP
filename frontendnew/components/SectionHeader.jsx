"use client"

export default function SectionHeader({ id, children, className = "" }) {
  return (
    <div id={id} className={`w-full flex items-center justify-start mb-6 ${className}`}>
      <span className="hz-section-chip dark-purple">{children}</span>
    </div>
  )
}
