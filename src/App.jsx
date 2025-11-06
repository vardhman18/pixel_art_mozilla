import React from 'react'
import Navigation from './components/layout/Navigation'
import Hero from './components/layout/Hero'
import HowToParticipate from './components/sections/HowToParticipate'
import SubmissionForm from './components/sections/SubmissionForm'
import Sidebar from './components/sections/Sidebar'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen px-3 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 body-text">
        <div className="max-w-7xl mx-auto">
          <Hero />
          
          {/* Event Details Section */}
          <section id="rules" className="mb-8 sm:mb-12 lg:mb-16">
            <Sidebar />
          </section>

          <HowToParticipate />

          {/* Submit Team Entry Section */}
          <section id="submit" className="mb-8 sm:mb-12 lg:mb-16">
            <SubmissionForm />
          </section>
        </div>
      </div>
      
      <section id="organizer">
        <Footer />
      </section>
    </>
  )
}
