import React, { useState } from 'react'

const SubmissionForm = () => {
  const [status, setStatus] = useState(null)

  function openGoogleForm() {
    // Official Google Form for Pixel Art Challenge submissions
    const googleFormUrl = 'https://forms.gle/J8W8dKTxbeeHwzVt9'
    window.open(googleFormUrl, '_blank')
    setStatus('✅ Google Form opened! Please fill it out using your college email.')
  }

  return (
    <div className="frame p-8 form-glow">
      <div className="flex items-center gap-3 mb-6">
        <div className="icon-box">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold pixel-title gradient-text">
          Submit Your Team Entry
        </h3>
      </div>

      {/* Submission Instructions */}
      <div className="form-section">
        <h4 className="section-title">
          <div className="icon-box w-8 h-8">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          Submit Your Pixel Art
        </h4>
        
        <div className="space-y-6">
          {/* Important Notice */}
          <div className="bg-gradient-to-r from-orange-100 to-red-100 border-l-4 border-orange-500 p-6 rounded-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-orange-800">Important Notice</h3>
                <p className="text-orange-700 mt-1">
                  <strong>Please fill the submission form using your college email ID only.</strong>
                  <br />
                  Submissions from personal email addresses will not be considered.
                </p>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">How to Submit:</h3>
            <ol className="list-decimal list-inside space-y-2 text-blue-700">
              <li>Create your pixel art (any category: Transformers, Cars, or Creative)</li>
              <li>Save your artwork as PNG, JPG, or any image format</li>
              <li>Click the "Submit Your Art" button below</li>
              <li>Fill out the Google Form with your team details</li>
              <li>Upload your pixel art file in the form</li>
              <li><strong>Use your college email ID when submitting</strong></li>
            </ol>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center gap-6 pt-8" style={{borderTop: '1px solid var(--border-color)'}}>
            <button 
              type="button" 
              onClick={openGoogleForm} 
              className="submit-button text-xl px-12 py-6 hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-bold">Submit Your Art</span>
            </button>
            
            <p className="text-center text-sm text-white max-w-md">
              Click the button above to open the Google Form. Please use your college email ID when submitting.
            </p>
            
            {status && (
              <div
                className={`status-message ${
                  status.includes('✅')
                    ? 'status-success'
                    : status.includes('Error') || status.includes('Failed')
                    ? 'status-error'
                    : 'status-info'
                }`}
              >
                {status}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionForm;
