import React from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState('home')
  
  const scrollToSection = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  // Track scroll position to highlight active section
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'rules', 'submit', 'organizer']
      const scrollPosition = window.scrollY + 100

      // Check if at top of page
      if (window.scrollY < 100) {
        setActiveSection('home')
        return
      }

      // Check each section
      for (const sectionId of sections.slice(1)) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            return
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getButtonStyle = (section) => {
    const isActive = activeSection === section
    return {
      background: isActive ? 'linear-gradient(135deg, var(--primary), var(--secondary))' : 'transparent',
      color: isActive ? '#ffffff' : 'var(--text-secondary)',
      border: isActive ? 'none' : '1px solid transparent',
      transform: isActive ? 'scale(1.05)' : 'scale(1)',
      boxShadow: isActive ? '0 4px 15px rgba(255, 152, 0, 0.4)' : 'none'
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 body-text transition-all duration-300" style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '2px solid rgba(255, 152, 0, 0.3)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img src="/mozilla.png" alt="Mozilla Club" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            <span className="tech-title text-xs sm:text-sm md:text-base lg:text-lg" style={{color: 'var(--text-primary)'}}>
              MOZILLA PHOENIX
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => scrollToSection('home')}
              className="tech-title px-3 lg:px-6 py-2 lg:py-3 text-xs lg:text-sm rounded-lg transition-all duration-300 hover:brightness-110"
              style={getButtonStyle('home')}
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('rules')}
              className="tech-title px-3 lg:px-6 py-2 lg:py-3 text-xs lg:text-sm rounded-lg transition-all duration-300 hover:brightness-110"
              style={getButtonStyle('rules')}
            >
              DETAILS
            </button>
            <button
              onClick={() => scrollToSection('submit')}
              className="tech-title px-3 lg:px-6 py-2 lg:py-3 text-xs lg:text-sm rounded-lg transition-all duration-300 hover:brightness-110"
              style={getButtonStyle('submit')}
            >
              SUBMIT
            </button>
            <button
              onClick={() => scrollToSection('organizer')}
              className="tech-title px-3 lg:px-6 py-2 lg:py-3 text-xs lg:text-sm rounded-lg transition-all duration-300 hover:brightness-110"
              style={getButtonStyle('organizer')}
            >
              ORGANIZER
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{
              background: 'rgba(248, 248, 248, 0.8)',
              color: 'var(--text-primary)',
              border: '2px solid var(--border-color)'
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="tech-title w-full px-4 py-3 text-sm rounded-lg transition-all duration-300 text-left"
              style={{
                ...getButtonStyle('home'),
                border: activeSection === 'home' ? 'none' : '2px solid var(--border-color)'
              }}
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('rules')}
              className="tech-title w-full px-4 py-3 text-sm rounded-lg transition-all duration-300 text-left hover:brightness-110"
              style={{
                ...getButtonStyle('rules'),
                background: activeSection === 'rules' ? 'linear-gradient(135deg, var(--primary), var(--secondary))' : 'rgba(255, 152, 0, 0.05)',
                border: '2px solid var(--border-color)',
                color: activeSection === 'rules' ? '#ffffff' : 'var(--text-secondary)'
              }}
            >
              DETAILS
            </button>
            <button
              onClick={() => scrollToSection('submit')}
              className="tech-title w-full px-4 py-3 text-sm rounded-lg transition-all duration-300 text-left hover:brightness-110"
              style={{
                ...getButtonStyle('submit'),
                background: activeSection === 'submit' ? 'linear-gradient(135deg, var(--primary), var(--secondary))' : 'rgba(255, 152, 0, 0.05)',
                border: '2px solid var(--border-color)',
                color: activeSection === 'submit' ? '#ffffff' : 'var(--text-secondary)'
              }}
            >
              SUBMIT
            </button>
            <button
              onClick={() => scrollToSection('organizer')}
              className="tech-title w-full px-4 py-3 text-sm rounded-lg transition-all duration-300 text-left hover:brightness-110"
              style={{
                ...getButtonStyle('organizer'),
                background: activeSection === 'organizer' ? 'linear-gradient(135deg, var(--primary), var(--secondary))' : 'rgba(255, 152, 0, 0.05)',
                border: '2px solid var(--border-color)',
                color: activeSection === 'organizer' ? '#ffffff' : 'var(--text-secondary)'
              }}
            >
              ORGANIZER
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
