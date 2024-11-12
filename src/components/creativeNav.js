import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import SEO from "./seo"

const StyledNav = styled.div`
  /* Underline styles */
  a {
    float: right;
    display: block;
    position: relative;
    color: #000000;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    display: inline-block;
    padding: 8px 20px;
  }

  a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.2em;
    background-color: grey;
    opacity: 0;
    transition: opacity 600ms, transform 600ms;
    transform: scale(0);
    transform-origin: center;
  }

  a:hover::after,
  a:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.9em, 1);
    transform: scale(0.5);
  }

  .nav-bar {
    background-color: white;
    color: black;
    padding: 10px;
    padding-bottom: 5%;
    display: flex;
    justify-content: space-between;
  }

  .nav-item {
    padding: 0 10px;
    color: grey;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }

  .nav-item:hover {
    color: black;
  }

  .align-left {
    text-align: left;
  }

  .align-right {
    text-align: right;
  }

  /* Mobile styles */
  @media (max-width: 767px) {
    .nav-bar {
      display: none;
    }

    .hamburger {
      display: block;
      cursor: pointer;
      position: absolute;
      right: 20px;
      top: 20px;
      z-index: 2;
    }
  }

  @media (min-width: 768px) {
    .hamburger {
      display: none;
    }
  }

  .line {
    width: 25px;
    height: 2px;
    background-color: grey;
    margin: 5px 0;
    transition: all 0.3s ease;
  }

  .open .line:nth-child(1) {
    transform: rotate(45deg);
    transform-origin: left top;
  }

  .open .line:nth-child(2) {
    opacity: 0;
  }

  .open .line:nth-child(3) {
    transform: rotate(-45deg);
    transform-origin: left bottom;
  }

  .nav-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  .nav-overlay.visible {
    opacity: 1;
    pointer-events: auto;
  }

  .nav-overlay a {
    color: black;
    text-decoration: none;
    margin-bottom: 100px;
    font-size: 1.2rem;
  }
`

const NavLinks = () => (
  <nav className="nav-bar">
    <div className="align-left">
      <Link to="/creative" className="nav-item">
        HOME
      </Link>
      <Link to="/videography" className="nav-item">
        VIDEOGRAPHY
      </Link>
    </div>
    <div className="align-right">
      <Link to="/myself" className="nav-item">
        MYSELF
      </Link>
      <Link to="/creativecontact" className="nav-item">
        CONTACT
      </Link>
      <Link to="/" className="nav-item">
        Personal Website
      </Link>
    </div>
  </nav>
)

// Add this before the CreativeNav component
NavLinks.displayName = "NavLinks"

const MobileMenu = ({ isOpen, toggleMenu }) => (
  <div className={`nav-overlay ${isOpen ? "visible" : ""}`}>
    <div>
      <Link to="/creative" className="nav-item">
        HOME
      </Link>
      <Link to="/videography" className="nav-item">
        VIDEOGRAPHY
      </Link>
    </div>
    <div className="align-right">
      <Link to="/myself" className="nav-item">
        MYSELF
      </Link>
      <Link to="/creativecontact" className="nav-item">
        CONTACT
      </Link>
      <Link to="/" className="nav-item">
        Personal Website
      </Link>
    </div>
  </div>
)

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
}

const CreativeNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <StyledNav>
      <NavLinks />
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <MobileMenu
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
    </StyledNav>
  )
}

export default CreativeNav
