import React, { useState, useRef } from 'react'

const SubmissionForm = () => {
  const [teamName, setTeamName] = useState('')
  const [enrollment1, setEnrollment1] = useState('')
  const [enrollment2, setEnrollment2] = useState('')
  const [enrollment3, setEnrollment3] = useState('')
  const [captainMobile, setCaptainMobile] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Transformers')
  const [fileDataUrl, setFileDataUrl] = useState(null)
  const [fileName, setFileName] = useState('')
  const [appsScriptUrl, setAppsScriptUrl] = useState('')
  const [status, setStatus] = useState(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const fileRef = useRef(null)

  function handleFile(f) {
    if (!f) return
    if (!f.type.startsWith('image/')) {
      setStatus('Please upload an image file (PNG, JPG, etc.)')
      return
    }
    setFileName(f.name)
    const reader = new FileReader()
    reader.onload = () => setFileDataUrl(reader.result)
    reader.readAsDataURL(f)
    setStatus(null)
  }

  function onFileChange(e) {
    handleFile(e.target.files?.[0])
  }

  function onDrop(e) {
    e.preventDefault()
    setIsDragOver(false)
    handleFile(e.dataTransfer.files?.[0])
  }

  function onDragOver(e) {
    e.preventDefault()
    setIsDragOver(true)
  }

  function onDragLeave(e) {
    e.preventDefault()
    setIsDragOver(false)
  }

  function downloadUploaded() {
    if (!fileDataUrl) return
    const a = document.createElement('a')
    a.href = fileDataUrl
    a.download = fileName || 'pixel-art.png'
    a.click()
  }

  function validateMobile(mobile) {
    const phoneRegex = /^[6-9]\d{9}$/
    return phoneRegex.test(mobile)
  }

  async function onSubmit(e) {
    e.preventDefault()

    if (!validateMobile(captainMobile)) {
      setStatus('Please enter a valid 10-digit mobile number')
      return
    }
    if (!fileDataUrl) {
      setStatus('Please upload your pixel art file')
      return
    }

    setStatus('Submitting...')
    const payload = {
      teamName,
      enrollment1,
      enrollment2,
      enrollment3,
      captainMobile,
      title,
      category,
      fileName,
      fileData: fileDataUrl
    }
    try {
      if (!appsScriptUrl) {
        setStatus('No Google Apps Script URL provided. Download available locally.')
        return
      }
      const res = await fetch(appsScriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (res.ok) {
        setStatus('✅ Submitted! Your team entry was recorded.')
        setTeamName('')
        setEnrollment1('')
        setEnrollment2('')
        setEnrollment3('')
        setCaptainMobile('')
        setTitle('')
        setFileDataUrl(null)
        setFileName('')
      } else {
        const text = await res.text()
        setStatus('Failed: ' + res.status + ' ' + text)
      }
    } catch (err) {
      setStatus('Error: ' + err.message)
    }
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

      <form onSubmit={onSubmit} className="space-y-6">
        {/* Team Details */}
        <div className="form-section">
          <h4 className="section-title">
            <div className="icon-box w-8 h-8">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            Team Information
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="input-group">
              <label className="input-label">Team Name *</label>
              <input
                required
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="input-field"
                placeholder="Team Transformers"
              />
            </div>
            <div className="input-group">
              <label className="input-label">Captain Mobile *</label>
              <input
                required
                value={captainMobile}
                onChange={(e) => setCaptainMobile(e.target.value)}
                type="tel"
                pattern="[6-9][0-9]{9}"
                className="input-field"
                placeholder="9876543210"
              />
            </div>
          </div>
        </div>

        {/* Enrollment Numbers */}
        <div className="form-section">
          <h4 className="section-title">
            <div className="icon-box w-8 h-8">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            Team Members
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="input-group">
              <label className="input-label">Enrollment No. 1 *</label>
              <input
                required
                value={enrollment1}
                onChange={(e) => setEnrollment1(e.target.value)}
                className="input-field"
                placeholder="2021001234"
              />
            </div>
            <div className="input-group">
              <label className="input-label">Enrollment No. 2 *</label>
              <input
                required
                value={enrollment2}
                onChange={(e) => setEnrollment2(e.target.value)}
                className="input-field"
                placeholder="2021001235"
              />
            </div>
            <div className="input-group">
              <label className="input-label">Enrollment No. 3</label>
              <input
                value={enrollment3}
                onChange={(e) => setEnrollment3(e.target.value)}
                className="input-field"
                placeholder="Optional"
              />
            </div>
          </div>
        </div>

        {/* Artwork Details */}
        <div className="form-section">
          <h4 className="section-title">
            <div className="icon-box w-8 h-8">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4zm0 0h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 0 1 2.828 0l2.829 2.829a2 2 0 0 1 0 2.828l-8.486 8.485M7 17h.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            Artwork Details
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Artwork title"
              className="input-field col-span-2"
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="input-field">
              <option>Transformers</option>
              <option>Cars</option>
              <option>Creative</option>
            </select>
          </div>
        </div>

        {/* File Upload */}
        <div className="form-section">
          <h4 className="section-title">
            <div className="icon-box w-8 h-8">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M7 16a4 4 0 0 1-.88-7.903A5 5 0 1 1 15.9 6L16 6a5 5 0 0 1 1 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            Upload Your Art
          </h4>
          <div
            className={`upload-zone ${isDragOver ? 'upload-zone-active' : ''}`}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
          >
            {fileDataUrl ? (
              <div className="space-y-4">
                <div className="w-32 h-32 mx-auto rounded-xl flex items-center justify-center p-2 border-2" style={{borderColor: 'var(--primary)', background: 'var(--card-bg)'}}>
                  <img src={fileDataUrl} alt="preview" className="max-w-full max-h-full object-contain rounded image-rendering-pixelated" />
                </div>
                <p className="text-sm font-medium" style={{color: 'var(--text-primary)'}}>{fileName}</p>
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="text-sm font-medium transition-colors"
                  style={{color: 'var(--primary)'}}
                >
                  Change file
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="icon-box icon-large mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M7 16a4 4 0 0 1-.88-7.903A5 5 0 1 1 15.9 6L16 6a5 5 0 0 1 1 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="font-medium" style={{color: 'var(--text-primary)'}}>
                  Drag & drop your pixel art here, or{' '}
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    className="font-bold transition-colors underline"
                    style={{color: 'var(--primary)'}}
                  >
                    browse files
                  </button>
                </p>
                <p className="text-xs" style={{color: 'var(--text-secondary)'}}>Accepts PNG, JPG, JPEG and other image formats</p>
              </div>
            )}
          </div>
          <input ref={fileRef} accept="image/*" type="file" onChange={onFileChange} className="hidden" />
        </div>

        {/* Optional Google Apps Script */}
        <details className="form-section">
          <summary className="text-sm font-medium cursor-pointer flex items-center gap-2" style={{color: 'var(--text-secondary)'}}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Advanced: Google Apps Script URL (optional)
          </summary>
          <div className="mt-4">
            <input
              value={appsScriptUrl}
              onChange={(e) => setAppsScriptUrl(e.target.value)}
              placeholder="https://script.google.com/macros/s/XXX/exec"
              className="input-field w-full text-sm"
            />
            <p className="text-xs mt-2" style={{color: 'var(--text-secondary)'}}>
              Deploy the provided Google Apps Script to automatically save submissions to Google Sheets.
            </p>
          </div>
        </details>

        {/* Submit Buttons */}
        <div className="flex flex-wrap gap-4 items-center pt-6" style={{borderTop: '1px solid var(--border-color)'}}>
          <button type="submit" className="submit-button">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Submit Entry</span>
          </button>
          <button type="button" onClick={downloadUploaded} className="secondary-button">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Download File</span>
          </button>
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
      </form>
    </div>
  )
}

export default SubmissionForm
