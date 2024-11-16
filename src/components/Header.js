'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Header = () => {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  const isActive = (path) => pathname === path

  const handleLinkClick = () => {
    const navbarToggler = document.getElementById('navbarCollapse')
    if (navbarToggler.classList.contains('show')) {
      navbarToggler.classList.remove('show')
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="position-relative p-0">
      <nav className={`navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 ${isScrolled ? 'sticky-top shadow-sm' : ''}`}>
        <Link href="/" className="navbar-brand p-0">
          <Image 
            src="/assets/img/amtech-logo.png"
            alt="Logo"
            width={60}
            height={60}
            priority
          />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
        <div className="navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto py-0">
            <Link href="/" className={`nav-item nav-link ${isActive('/') ? 'active' : ''}`} onClick={handleLinkClick}>
              Home
            </Link>
            <Link href="/about" className={`nav-item nav-link ${isActive('/about') ? 'active' : ''}`} onClick={handleLinkClick}>
              About
            </Link>
            <Link href="/service" className={`nav-item nav-link ${isActive('/service') ? 'active' : ''}`} onClick={handleLinkClick}>
              Service
            </Link>
            <Link href="/project" className={`nav-item nav-link ${isActive('/project') ? 'active' : ''}`} onClick={handleLinkClick}>
              Project
            </Link>
            <Link href="/contact" className={`nav-item nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={handleLinkClick}>
              Contact
            </Link>
          </div>
          <Link href="/get-started" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header