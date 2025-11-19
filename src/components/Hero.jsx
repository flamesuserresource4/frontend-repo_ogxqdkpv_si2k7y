import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative w-full min-h-[88vh] flex items-center justify-center overflow-hidden">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and vignette overlays (won't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-slate-200 text-sm mb-6">
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
          New: Smarter orchestration and analytics
        </div>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
          A modern digital IT solution for teams that ship faster
        </h1>
        <p className="mt-5 text-base sm:text-lg text-slate-200/90 max-w-2xl mx-auto">
          Streamline operations, integrate your tools, and gain real-time visibility with an enterprise-grade platform designed for scale, security, and speed.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#demo"
            className="group inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-medium shadow-lg shadow-blue-500/25 transition-colors"
          >
            Book a Demo
            <svg className="ml-2 h-4 w-4 opacity-90 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href="/brochure.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium border border-white/15 backdrop-blur-md transition-colors"
          >
            Download Brochure
          </a>
        </div>

        {/* Social proof / mini highlights */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          {[
            ['Uptime', '99.95%'],
            ['Deploys', 'CI/CD ready'],
            ['Security', 'SOC 2'],
            ['Scalability', 'Elastic'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-3 text-slate-200">
              <div className="text-xs uppercase tracking-wider text-slate-300/70">{label}</div>
              <div className="text-sm font-semibold">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
