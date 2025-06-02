"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface HeaderProps {
  bgTransparent?: boolean;
  isOverlay?: boolean;
}

const Header = ({ bgTransparent = true, isOverlay = false }: HeaderProps) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (path: string) => pathname === path;

  const handleLinkClick = () => {
    const navbarToggler = document.getElementById("navbarCollapse");
    if (navbarToggler?.classList.contains("show")) {
      navbarToggler.classList.remove("show");
    }
  };

  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`position-relative p-0 ${isOverlay ? "position-absolute w-100 z-1" : ""
        } bg-header`}
    >
      <nav
        className={`navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 ${isScrolled
            ? "sticky-top shadow-sm bg-white"
            : bgTransparent
              ? "bg-transparent"
              : "sticky-top shadow-sm bg-white"
          }
        `}
      >
        <div className="rounded-3 bg-white">
          <Image
            src="/assets/img/logo-whiteBackground.png"
            alt="Logo"
            width={95}
            height={95}
            priority
            className="p-2"
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto py-0">
            <Link
              href="/"
              className={`nav-item nav-link mx-3 ${isActive("/") ? "active" : ""
                }`}
              onClick={handleLinkClick}
            >
              <div className={isActive("/") ? "rounded-pill active" : ""}>
                Home
              </div>
            </Link>
            <Link
              href="/about"
              className={`nav-item nav-link mx-3 ${isActive("/about") ? "active" : ""
                }`}
              onClick={handleLinkClick}
            >
              <div className={isActive("/about") ? "rounded-pill active" : ""}>
                About
              </div>
            </Link>
            <div className="nav-item dropdown">
              <a
                href="/services"
                className={`nav-link dropdown-toggle mx-3 ${isActive("/services") ? "active" : ""
                  }`}
                data-bs-toggle="dropdown"
              >
                <div
                  className={isActive("/services") ? "rounded-pill active" : ""}
                >
                  Services
                </div>
              </a>
              <div className="dropdown-menu m-0">
              <Link
                  href="/process"
                  className="dropdown-item"
                  onClick={handleLinkClick}
                >
                  Staffing
                </Link>
                <Link
                  href="/sitecore"
                  className="dropdown-item"
                  onClick={handleLinkClick}
                >
                  Sitecore
                </Link>
                {/* <Link
                  href="/services/mobile-development"
                  className="dropdown-item"
                  onClick={handleLinkClick}
                >
                  Mobile Development
                </Link>
                <Link
                  href="/services/cloud-solutions"
                  className="dropdown-item"
                  onClick={handleLinkClick}
                >
                  Cloud Solutions
                </Link> */}
                <Link
                  href="/consulting"
                  className="dropdown-item"
                  onClick={handleLinkClick}
                >
                  Consulting
                </Link>
              </div>
            </div>
            <Link
              href="/process"
              className={`nav-item nav-link mx-3 ${isActive("/process") ? "active" : ""
                }`}
              onClick={handleLinkClick}
            >
              <div
                className={isActive("/process") ? "rounded-pill active" : ""}
              >
                Our Process
              </div>
            </Link>
            <Link
              href="/talents"
              className={`nav-item nav-link mx-3 ${isActive("/talents") ? "active" : ""
                }`}
              onClick={handleLinkClick}
            >
              <div
                className={isActive("/talents") ? "rounded-pill active" : ""}
              >
                Our Talents
              </div>
            </Link>
            <Link
              href="/contact"
              className={`nav-item nav-link mx-3 ${isActive("/contact") ? "active" : ""
                }`}
              onClick={handleLinkClick}
            >
              <div
                className={isActive("/contact") ? "rounded-pill active" : ""}
              >
                Contact
              </div>
            </Link>
            <Link
              href="/projects"
              className={`nav-item nav-link mx-3 ${isActive("/projects") ? "active" : ""
                }`}
              onClick={handleLinkClick}
            >
              <div
                className={isActive("/projects") ? "rounded-pill active" : ""}
              >
                Projects
              </div>
            </Link>
          </div>
        <Link
              href="/contact"
              className={`bg-secondary btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block ${isActive("/contact") ? "active" : ""
                }`}
              onClick={handleLinkClick}
            >Get Start
            </Link>
        </div>{" "}
      </nav>
    </div>
  );
};

export default Header;
