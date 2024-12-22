import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledNav = styled.div`
  .nav-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: ${props =>
      props.isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent"};
    backdrop-filter: ${props => (props.isScrolled ? "blur(10px)" : "none")};
    transition: all 0.3s ease;
    z-index: 1000;
    border-bottom: ${props =>
      props.isScrolled ? "1px solid rgba(0, 0, 0, 0.1)" : "none"};
  }

  .nav-bar {
    max-width: 1400px;
    margin: 0 auto;
    padding: ${props => (props.isScrolled ? "1rem 2rem" : "1.5rem 2rem")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
  }

  .nav-links-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 0.2em;
    color: black;
    text-decoration: none;
    transition: all 0.3s ease;
    left: 30px;
    &:hover {
      transform: translateY(-1px);
    }
  }

  .nav-section {
    display: flex;
    gap: 3rem;
    align-items: center;
    flex: 1;

    &:nth-child(1) {
      justify-content: flex-start;
    }

    &:nth-child(2) {
      justify-content: center;
    }

    &:nth-child(3) {
      justify-content: flex-end;
    }
  }

  .nav-item {
    position: relative;
    color: #1a1a1a;
    font-size: 0.9rem;
    text-decoration: none;
    letter-spacing: 0.1em;
    padding: 0.5rem 0;
    transition: all 0.3s ease;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background: currentColor;
      bottom: 0;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &:hover {
      color: #000;

      &::before {
        transform-origin: left;
        transform: scaleX(1);
      }
    }
  }
  .logo2 {
    display: none;
  }
  .special-link {
    color: #1a1a1a;
    padding: 0.5rem 1.5rem;
    border: 1px solid #1a1a1a;
    border-radius: 2px;
    transition: all 0.3s ease;

    &:hover {
      background: #1a1a1a;
      color: white;

      &::before {
        transform: scaleX(0);
      }
    }
  }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
    z-index: 100;
    padding: 0.5rem;

    .line {
      width: 24px;
      height: 2px;
      background: #1a1a1a;
      transition: all 0.3s ease;
      transform-origin: center;
    }

    &.open {
      .line:first-child {
        transform: rotate(45deg) translate(5px, 5px);
      }

      .line:nth-child(2) {
        opacity: 0;
      }

      .line:last-child {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: all 0.3s ease;
    z-index: 90;

    &.visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .nav-item {
      font-size: 1.5rem;
      transform: translateY(20px);
      opacity: 0;
      transition: all 0.3s ease;

      &.animate {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    .nav-section {
      display: none;
    }

    .hamburger {
      display: flex;
    }

    .logo {
      font-size: 1rem;
    }
    .logo2 {
      display: block;
      top: -50px;
      left: 30px;
    }
  }
`

const NavLinks = () => (
  <div className="nav-links-container">
    <div className="nav-section">
      <Link to="/creative" className="nav-item">
        Home
      </Link>
      <Link to="/videography" className="nav-item">
        Videography
      </Link>
    </div>
    <div className="nav-section">
      <Link to="/creative" className="logo nav-item">
        SHOVON SAHA
      </Link>
    </div>
    <div className="nav-section">
      <Link to="/myself" className="nav-item">
        About
      </Link>
      <Link to="/creativecontact" className="nav-item special-link">
        Get in Touch
      </Link>
      <Link to="/" className="nav-item">
        Personal Website
      </Link>
    </div>
  </div>
)

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const links = [
    { to: "/creative", text: "Home" },
    { to: "/videography", text: "Videography" },
    { to: "/myself", text: "About" },
    { to: "/creativecontact", text: "Contact" },
  ]

  return (
    <div>
      <div>
        <Link to="/creative" className="logo2 nav-item">
          SHOVON SAHA
        </Link>
      </div>
      <div className={`mobile-menu ${isOpen ? "visible" : ""}`}>
        {links.map((link, index) => (
          <Link
            key={link.to}
            to={link.to}
            className={`nav-item ${isOpen ? "animate" : ""}`}
            onClick={toggleMenu}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  )
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
}

const CreativeNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? "hidden" : "initial"
  }

  return (
    <StyledNav isScrolled={isScrolled}>
      <div className="nav-container">
        <nav className="nav-bar">
          <NavLinks />
          <div
            className={`hamburger ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            role="button"
            tabIndex={0}
            onKeyPress={e => e.key === "Enter" && toggleMenu()}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </div>
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </StyledNav>
  )
}

export default CreativeNav
