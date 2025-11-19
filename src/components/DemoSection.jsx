import React, { useState } from 'react'

const DemoSection = () => {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="demo" className="py-20 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">See it in action</h2>
          <p className="mt-3 text-slate-300/90">Book a 30-minute walkthrough tailored to your use case.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-slate-200">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300/90 mb-1">Name</label>
                <input required className="w-full rounded-lg bg-slate-900/80 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm text-slate-300/90 mb-1">Work Email</label>
                <input type="email" required className="w-full rounded-lg bg-slate-900/80 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-300/90 mb-1">Company</label>
                <input className="w-full rounded-lg bg-slate-900/80 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Acme Inc." />
              </div>
              <button className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-medium transition-colors">Request Demo</button>
              {submitted && <p className="text-sm text-emerald-300/90">Thanks! We’ll be in touch shortly.</p>}
            </form>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6">
            <div className="grid grid-cols-2 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-28 rounded-xl bg-slate-900/70 border border-white/10"></div>
              ))}
            </div>
            <p className="mt-4 text-slate-300/90 text-sm">Preview of dashboards, workflow builder, and integrations hub.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoSection
