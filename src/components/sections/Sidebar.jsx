import React from 'react'

const EventRules = () => {
  const rules = [
    'Teams of 2-3 members only',
    'Use Pixilart platform for creation',
    'Theme: Transformers, Cars, or Creative designs',
    'Original artwork or properly credited fan art',
    'Keep content appropriate and family-friendly',
    'One submission per team',
    'Submit by Nov 9, 2025',
    'Only one winner team will be selected',
    'Exciting cash prize for the winning team'
  ]

  return (
    <div className="frame p-6 sm:p-8 lg:p-10 sidebar-card">
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="icon-box w-12 h-12 sm:w-14 sm:h-14">
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text tech-title">
          Event Details 
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {rules.map((rule, index) => (
          <div key={index} className="frame p-4 sm:p-5 group hover:scale-105 transition-all duration-300" style={{background: 'rgba(255, 255, 255, 0.8)'}}>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-bold text-white group-hover:scale-110 transition-transform" style={{background: 'linear-gradient(135deg, var(--primary), var(--secondary))'}}>
                {index + 1}
              </span>
              <span className="leading-relaxed text-sm sm:text-base pt-1 sm:pt-2" style={{color: '#333333'}}>{rule}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Sidebar = () => {
  return (
    <aside className="w-full">
      <EventRules />
    </aside>
  )
}

export default Sidebar
