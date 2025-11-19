import React from 'react'

const benefits = [
  {
    title: 'Accelerate delivery',
    desc: 'Prebuilt workflows, templates, and an API-first architecture help teams ship features faster with fewer blockers.'
  },
  {
    title: 'Integrate everything',
    desc: 'Connect your stack with plug-and-play connectors and a robust integration hub built for enterprise scale.'
  },
  {
    title: 'Operate with confidence',
    desc: 'Real-time analytics, RBAC, and end-to-end observability provide the visibility and control you need.'
  },
  {
    title: 'Secure by design',
    desc: 'Encryption, SSO/SAML, audit trails, and compliance tooling come standard to meet rigorous requirements.'
  },
]

const Benefits = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_10%_0%,rgba(59,130,246,0.12),transparent),radial-gradient(600px_300px_at_90%_0%,rgba(14,165,233,0.12),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Why teams choose our platform</h2>
          <p className="mt-3 text-slate-300/90 max-w-2xl mx-auto">A unified control plane that lets you orchestrate, observe, and scale your digital operations with ease.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 text-slate-200">
              <div className="h-9 w-9 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-200 mb-3">★</div>
              <h3 className="font-semibold text-white">{b.title}</h3>
              <p className="text-sm text-slate-300/90 mt-1">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
