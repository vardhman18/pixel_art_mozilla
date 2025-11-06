import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full mt-16 -mx-6 sm:-mx-12 bg-gradient-to-b from-transparent to-black/30">
      <div className="px-12 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Team Section */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, var(--primary), var(--secondary))'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="tech-title text-2xl" style={{color: 'var(--primary)'}}>TEAM</h4>
              </div>
              <div className="body-text space-y-6">
                <div>
                  <p className="tech-title text-lg mb-3" style={{color: 'var(--primary)'}}>Organizers:</p>
                  <p className="text-lg mb-2" style={{color: 'var(--text-primary)'}}>Yash Singhal</p>
                  <p className="text-lg" style={{color: 'var(--text-primary)'}}>Kush Sharma</p>
                </div>
                <div>
                  <p className="tech-title text-lg mb-3" style={{color: 'var(--primary)'}}>Developer:</p>
                  <p className="text-lg" style={{color: 'var(--text-primary)'}}>Vardhman Jain</p>
                </div>
              </div>
            </div>

            {/* Join Community Section */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, var(--primary), var(--secondary))'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="tech-title text-2xl" style={{color: 'var(--primary)'}}>JOIN THE COMMUNITY</h4>
              </div>
              <div className="mb-6">
                <p className="tech-title text-lg" style={{color: 'var(--primary)'}}>Mozilla Phoenix Club</p>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="https://www.instagram.com/mpcjuet?igsh=MWNzZ2V4Y2toZWRtbA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-title px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:brightness-110 hover:scale-105 flex items-center gap-3"
                  style={{
                    background: 'linear-gradient(135deg, #E1306C, #C13584)',
                    color: '#fff',
                    boxShadow: '0 10px 25px rgba(225, 48, 108, 0.5)'
                  }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  INSTAGRAM
                </a>
                <a
                  href="https://www.linkedin.com/company/mozilla-phoenix-club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-title px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:brightness-110 hover:scale-105 flex items-center gap-3"
                  style={{
                    background: 'linear-gradient(135deg, #0077B5, #00A0DC)',
                    color: '#fff',
                    boxShadow: '0 10px 25px rgba(0, 119, 181, 0.5)'
                  }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
