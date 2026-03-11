import { useEffect, useState } from 'react'
import './App.css'

const IMAGE_URL = 'https://picsum.photos/seed/mst/400/250'
const SPECIAL_CHAR_REGEX = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

function App() {
  // --- Form state ---
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // --- Lazy image state ---
  const [imageLoaded, setImageLoaded] = useState(false)
  const [showImage, setShowImage] = useState(false)

  // Preload image in background so it's cached when user clicks Load
  useEffect(() => {
    const img = new Image()
    img.src = IMAGE_URL
  }, [])

  function validateName(value) {
    if (value.length < 8) return 'Name must be at least 8 characters.'
    return ''
  }

  function validatePassword(value) {
    if (!SPECIAL_CHAR_REGEX.test(value)) return 'Password must contain at least one special character.'
    return ''
  }

  function handleNameChange(e) {
    const val = e.target.value
    setName(val)
    if (submitted) setNameError(validateName(val))
  }

  function handlePasswordChange(e) {
    const val = e.target.value
    setPassword(val)
    if (submitted) setPasswordError(validatePassword(val))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    const nErr = validateName(name)
    const pErr = validatePassword(password)
    setNameError(nErr)
    setPasswordError(pErr)
    if (!nErr && !pErr) {
      alert(`Form submitted successfully!\nName: ${name}`)
    }
  }

  function handleLoadImage() {
    setShowImage(true)
    setImageLoaded(false)
  }

  return (
    <div className="container">
      <h1>Form Validation &amp; Lazy Image Loading</h1>

      {/* Form Section */}
      <section className="form-section">
        <h2>Form Validation</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              className={nameError ? 'input-error' : ''}
            />
            {nameError && <span className="error-msg">{nameError}</span>}
            <ul className="rules">
              <li className={name.length >= 8 ? 'valid' : 'invalid'}>
                At least 8 characters
              </li>
            </ul>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              className={passwordError ? 'input-error' : ''}
            />
            {passwordError && <span className="error-msg">{passwordError}</span>}
            <ul className="rules">
              <li className={SPECIAL_CHAR_REGEX.test(password) ? 'valid' : 'invalid'}>
                At least one special character (!@#$%^&amp;*...)
              </li>
            </ul>
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </section>

      {/* Lazy Image Section */}
      <section className="image-section">
        <h2>Lazy Image Loading</h2>
        <button className="btn" onClick={handleLoadImage}>Load Image</button>
        {showImage && (
          <div className="image-wrapper">
            {!imageLoaded && <div className="skeleton" />}
            <img
              src={IMAGE_URL}
              alt="Lazy loaded"
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              style={{ display: imageLoaded ? 'block' : 'none' }}
            />
          </div>
        )}
      </section>
    </div>
  )
}

export default App
