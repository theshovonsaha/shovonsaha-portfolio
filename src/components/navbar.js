import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { navLinks } from "../../config"

const StyledNav = styled.nav`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 31.25rem;
    background: ${({ theme }) => theme.colors.background};
    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  .nav-link {
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    position: relative;
    margin-right: 1.25rem; /* Space between each link */
    padding: 0;
    transition: all 0.3s ease; /* Added smooth transition for hover effect */

    &::before {
      transition: 200ms ease-out;
      height: 0.1563rem;
      content: "";
      position: absolute;
      background-color: ${({ theme }) => theme.colors.primary};
      width: 0%;
      bottom: -0.125rem;
      left: 0;
    }

    &:hover::before {
      width: 100%;
    }
  }
  .cta-btn {
    width: auto;
    height: auto;
    font-weight: 700;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 0.125rem solid ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.background};
    transition: 20ms ease-out;
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    margin-left: 2rem; // Added space between buttons
    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.background};
    }
  }
`

const Navbar = () => {
  const { menu, button1, button2 } = navLinks
  return (
    <StyledNav>
      {menu.map(({ name, url }, key) => {
        return (
          <Link className="nav-link " key={key} to={url}>
            {name}
          </Link>
        )
      })}
      <Link className="cta-btn" to={button1.url}>
        {button1.name}
      </Link>
    </StyledNav>
  )
}

export default Navbar
