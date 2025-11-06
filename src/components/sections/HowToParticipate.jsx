import React from 'react'

const steps = [
  {
    id: 1,
    title: 'Form Your Team',
    description: 'Create a team of 2-3 members. Choose a team name and designate a captain.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Open Pixilart',
    description: 'Visit Pixilart.com, sign up/log in, and create a collaborative room to work together.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2"/>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Create Art',
    description: 'Draw pixel art with Transformers, Cars, or Creative themes using the canvas tools.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z M2 2l7.586 7.586" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="11" cy="11" r="2" strokeWidth="2"/>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Download',
    description: 'Export your finished artwork as PNG/JPG from Pixilart platform.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 5,
    title: 'Submit Here',
    description: 'Fill the form below with team details and upload your downloaded artwork.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 6,
    title: 'Deadline',
    description: 'Submit by Nov 15, 2025. Winners announced Nov 20!',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
        <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  }
]

const HowToParticipate = () => {
  return (
    <section className="mb-12">
      <div className="frame p-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="icon-box">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold pixel-title gradient-text">
              How to Participate
            </h2>
          </div>
          <p style={{color: '#666666'}}>Follow these steps to join the challenge</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="step-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="step-number">
                  {step.id}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="icon-box w-10 h-10">
                      {step.icon}
                    </div>
                    <h3 className="font-bold text-lg gradient-text">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{color: '#333333'}}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowToParticipate
