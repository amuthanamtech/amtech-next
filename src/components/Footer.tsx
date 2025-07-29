"use client";

import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
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
    <div
      className="container-fluid bg-primary text-light footer wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="py-5 px-lg-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">
              Address<span></span>
            </p>
            <p>
              <i className="fa fa-map-marker-alt me-3"></i>US,
              30 N Gould St Ste R Sheridan, WY 82801
            </p>
             <p>
              <i className="fa fa-map-marker-alt me-3"></i>United
              Arab Emirates, Compass Building, Al
              Shohada Road, AL Hamra Industrial Zone-FZ,Ras Al Khaimah, 
            </p>
            <p>
              <i className="fa fa-map-marker-alt me-3"></i>India, MRN Nagar
              Kallakurichi, Tamil Nadu
            </p>
            <p>
              <i className="fa fa-envelope me-3"></i>hr@amtechdigital.co
            </p>
            <p>
              <i className="fa fa-phone me-3"></i>+971 502097409
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">
              Quick Link<span></span>
            </p>
            <Link href="/about" className="btn btn-link">
              About Us
            </Link>
            <Link href="/contact" className="btn btn-link">
              Contact
            </Link>
            <a className="btn btn-link" href="">
              Privacy Policy
            </a>
            <a className="btn btn-link" href="">
              Terms & Condition
            </a>
            <a className="btn btn-link" href="/form">
              Career
            </a>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">
              Gallery<span></span>
            </p>
            <div className="row g-2">
              <div className="col-4">
                <Image
                  src="/assets/img/portfolio-1.jpg"
                  width={100}
                  height={100}
                  alt="Image"
                  priority
                />
              </div>
              <div className="col-4">
                <Image
                  src="/assets/img/portfolio-2.jpg"
                  width={100}
                  height={100}
                  alt="Image"
                  className="img-fluid"
                  priority
                />
              </div>
              <div className="col-4">
                <Image
                  src="/assets/img/portfolio-3.jpg"
                  width={100}
                  height={100}
                  alt="Image"
                  className="img-fluid"
                  priority
                />
              </div>
              <div className="col-4">
                <Image
                  src="/assets/img/portfolio-4.jpg"
                  width={100}
                  height={100}
                  alt="Image"
                  className="img-fluid"
                  priority
                />
              </div>
              <div className="col-4">
                <Image
                  src="/assets/img/portfolio-5.jpg"
                  width={100}
                  height={100}
                  alt="Image"
                  className="img-fluid"
                  priority
                />
              </div>
              <div className="col-4">
                <Image
                  src="/assets/img/portfolio-5.jpg"
                  width={100}
                  height={100}
                  alt="Image"
                  className="img-fluid"
                  priority
                />
              </div>
            </div>          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">
              Newsletter<span></span>
            </p>
            <p>
              Stay updated with our latest news, insights, and exclusive offers.
              Subscribe to our newsletter today!
            </p>
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
            <div className="d-flex pt-3 mt-4 mx-5">
              <a className="btn btn-outline-light btn-social" href="https://x.com/Amtech_Digital_" target='_blank'>
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/profile.php?id=61578038741039" target='_blank'>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/pathi.amtech/" target='_blank'>
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/company/amtech-digital-solutions" target='_blank'>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href="https://www.tiktok.com/tiktokstudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-lg-5">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              ©{" "}
              <a className="border-bottom" href="">
                AmTechDigital.co
              </a>
              , All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <Link href="/">Home</Link>
                <Link href="/">Cookies</Link>
                <Link href="/">Help</Link>
                <Link href="/">FQAs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;