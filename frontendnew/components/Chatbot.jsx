"use client"
import { useState, useRef, useEffect } from "react"

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I’m the HelpZap assistant. How can I help you today?" },
  ])
  const [input, setInput] = useState("")
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, open])

  function onSubmit(e) {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    setMessages((m) => [
      ...m,
      { role: "user", content: text },
      { role: "assistant", content: "Thanks! Our AI backend will reply here once integrated." },
    ])
    setInput("")
  }

  return (
    <>
      <button
        aria-label="Open HelpZap AI Chat"
        className="fixed left-4 bottom-4 z-40 hz-cta rounded-full p-3 shadow-lg"
        onClick={() => setOpen((o) => !o)}
      >
        <img src="/images/icon-worker.jpg" alt="" width={24} height={24} className="rounded-sm" />
      </button>

      <div
        className={`fixed left-4 bottom-20 z-40 w-[92vw] max-w-sm rounded-2xl border bg-white shadow-2xl transition-all ${open ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-4"}`}
        role="dialog"
        aria-label="HelpZap Chatbot"
      >
        <div className="flex items-center justify-between p-3 border-b">
          <div className="flex items-center gap-2">
            <img src="/images/icon-worker.jpg" alt="" width={22} height={22} className="rounded" />
            <strong>HelpZap AI</strong>
          </div>
          <button className="text-sm hz-link p-1" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>

        <div className="h-64 overflow-y-auto px-3 py-2 space-y-3">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${m.role === "assistant" ? "bg-[color:var(--hz-brand)]/10" : "bg-gray-100 ml-auto"}`}
            >
              {m.content}
            </div>
          ))}
          <div ref={endRef} />
        </div>

        <form onSubmit={onSubmit} className="p-3 border-t flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message…"
            className="flex-1 rounded-md border px-3 py-2 text-sm outline-none focus:border-[color:var(--hz-brand)]"
          />
          <button className="hz-cta rounded-md px-3 py-2 text-sm" type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  )
}
