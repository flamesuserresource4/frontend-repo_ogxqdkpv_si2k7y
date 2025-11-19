import React from 'react'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import DemoSection from './components/DemoSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero with 3D cover */}
      <Hero />

      {/* Benefits */}
      <Benefits />

      {/* Demo form */}
      <DemoSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
