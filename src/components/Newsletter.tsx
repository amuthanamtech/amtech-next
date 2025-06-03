"use client";

import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setMessage('Please enter your email address')
      setIsSuccess(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address')
      setIsSuccess(false)
      return
    }

    setIsLoading(true)
    setMessage('')
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      })

      if (response.ok) {
        setEmail('')
        setMessage('Thank you for subscribing!')
        setIsSuccess(true)
      } else {
        setMessage('Failed to subscribe. Please try again.')
        setIsSuccess(false)
      }
    } catch (error) {
      console.error('Subscription error:', error)
      setMessage('Network error. Please try again.')
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container-xxl bg-primary newsletter wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5 px-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <p className="section-title text-white justify-content-center">
              <span></span>Newsletter<span></span>
            </p>
            <h1 className="text-center text-white mb-4">Stay Always In Touch</h1>
            <p className="text-white mb-4">
              Stay connected with us to get the latest updates, insights, and exclusive offers.
            </p>
            
            {message && (
              <div className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'} mb-3`}>
                {message}
              </div>
            )}
            
            <div className="position-relative w-100 mt-3">
              <form onSubmit={handleSubmit}>
                <input 
                  name="email" 
                  className="form-control border-0 rounded-pill w-100 ps-4 pe-5"  
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email" 
                  placeholder="Enter Your Email" 
                  autoComplete="email"
                  style={{ height: '48px' }}
                  disabled={isLoading}
                />
                <button 
                  type="submit" 
                  className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                  disabled={isLoading || !email.trim()} 
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                  <i className="fa fa-paper-plane text-primary fs-4 ms-1"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
