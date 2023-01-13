import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
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

  /* Fade in */
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
    opacity 1;
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
.nav-item a {
  color: grey;
  text-decoration: none;
  padding: 10px;
}
.align-left {
  text-align: left;
}

.align-right {
  text-align: right;
}

  /* Show hamburger on mobile */
  @media (max-width: 767px) {
    .nav-bar {
      display: none;
    }
  }
    .hamburger {
      display: block;
      cursor: pointer;
      position: absolute;
      right: 20px;
      top: 20px;
    }
  }

  /* Hamburger styles */
  @media (min-width: 768px){
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

  /* Nav overlay styles */
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
  }

  .nav-overlay a {
    color: black;
    text-decoration: none;
    margin-bottom: 100px;
    font-size: 1.2rem;
  }
}
`

const creativeNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <StyledNav>
        <div className="nav-container">
          <nav className="nav-bar">
            <div className="nav-item align-left">
              <Link
                className="nav-item"
                activeClassName="activeNavItem"
                to="/creative"
              >
                Photography
              </Link>
              <Link
                className="nav-item"
                activeClassName="activeNavItem"
                to="/videography"
              >
                Videography
              </Link>
            </div>
            <div className="nav-item align-right">
              <Link
                className="nav-item"
                href="https://www.instagram.com/theartist.ca"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </Link>
              <Link
                className="nav-item"
                activeClassName="activeNavItem"
                to="/myself"
              >
                Myself
              </Link>
              <Link
                className="nav-item"
                activeClassName="activeNavItem"
                to="/creativecontact"
              >
                Contact
              </Link>
            </div>
          </nav>
          <div className="hamburger" onClick={toggleNav}>
            <div className={isOpen ? "line open" : "line"}></div>
            <div className={isOpen ? "line open" : "line"}></div>
            <div className={isOpen ? "line open" : "line"}></div>
          </div>
          {isOpen && (
            <div className="nav-overlay">
              <div className="hamburger" onClick={toggleNav}>
                <div className={isOpen ? "line open" : "line"}></div>
                <div className={isOpen ? "line open" : "line"}></div>
                <div className={isOpen ? "line open" : "line"}></div>
              </div>
              <nav>
                <Link to="/creative">Photography</Link>
                <Link to="/videography">Videography</Link>
                <Link
                  href="https://www.instagram.com/theartist.ca"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </Link>
                <Link to="/myself">Myself</Link>
                <Link to="/creativecontact">Contact</Link>
              </nav>
            </div>
          )}
        </div>
      </StyledNav>
    </>
  )
}
export default creativeNav
