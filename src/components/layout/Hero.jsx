import React from 'react'

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col pt-16 sm:pt-20">
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 lg:py-32 relative overflow-hidden rounded-2xl sm:rounded-3xl mb-8 sm:mb-16" style={{
        backgroundImage: 'url(/_3.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px'
      }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90"></div>
        
        <div className="text-center max-w-5xl mx-auto w-full relative z-10">
          {/* Main Title */}
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 sm:mb-8 animate-slide-up leading-tight" 
              style={{
                color: 'var(--text-primary)',
                textShadow: '0 0 20px rgba(255, 152, 0, 0.5)',
                fontFamily: "'Press Start 2P', cursive",
                lineHeight: '1.5'
              }}>
            MOZILLA CLUB:<br />
            <span style={{color: 'var(--primary)'}}>PIXEL ART CHALLENGE</span>
          </h1>

          <p className="body-text text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 animate-slide-up-delay-1 px-4" 
             style={{color: 'var(--text-secondary)', fontWeight: 500}}>
            Transform Your Creativity Into Pixel Masterpieces.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <a
              href="https://www.pixilart.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-title px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 hover:brightness-110 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: '#fff',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)'
              }}
            >
                🌐 VISIT PIXILART
            </a>
            <a
              href="https://www.pixilart.com/online"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-title px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 hover:brightness-110 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                color: '#000',
                boxShadow: '0 10px 30px rgba(255, 152, 0, 0.4)'
              }}
            >
              👤 CREATE ROOM 
            </a>
          </div>
        </div>
      </div>

      {/* Challenge Briefing */}
      <div className="relative mb-8 sm:mb-16 overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8">
        <div className="relative px-4 sm:px-6 py-12 sm:py-16 md:py-24 text-center">
          <h1 className="tech-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6" style={{color: 'var(--text-primary)'}}>
            CHALLENGE BRIEFING
          </h1>

          <p className="body-text text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-3xl mx-auto px-2" style={{color: 'var(--text-secondary)', fontWeight: 500}}>
            The Pixel Art Challenge is a creative competition where artists and designers showcase their pixel art skills. We're calling all creators to craft amazing pixel art in three exciting categories.
          </p>

          <p className="body-text text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-3xl mx-auto px-2" style={{color: 'var(--text-secondary)', fontWeight: 500}}>
            Choose your category: <span className="tech-title" style={{color: 'var(--primary)'}}>TRANSFORMERS</span>, <span className="tech-title" style={{color: 'var(--primary)'}}>CARS</span>, <span className="tech-title" style={{color: 'var(--primary)'}}>CREATIVE</span> etc. Show us your interpretation, your style, and your pixel perfect vision. Whether it's robots in disguise, racing machines, or your wildest imagination, make it count!
          </p>

         
        </div>
      </div>
    </div>
  )
}
