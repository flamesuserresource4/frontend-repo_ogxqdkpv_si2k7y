import React from 'react'

const Footer = () => {
  return (
    <footer className="py-10 bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-300/80">
        <div className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="Logo" className="h-6 w-6" />
          <span>Digital IT Solution</span>
        </div>
        <div className="text-sm">© 2025 All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
