import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
const StyledNav = styled.nav`
  .header {
    padding: 1rem 0 3rem;
    display: flex;
    justify-content: space-around;
  }
  .name {
    text-decoration: none;
    color: black;
  }
  .navList {
    display: flex;
    list-style-type: none;
    margin: 0;
    font-family: "Nanum Gothic", sans-serif;
    justify-content: space-around;
    align-items: left;
    flex-direction: column;
    flex-flow: row;
    padding-bottom: 9vh;
  }

  .navItems {
    color: grey;
    font-size: 0.8rem;
    margin-right: 0.9rem;
    text-decoration: none;
    letter-spacing: 1px;
  }
  .navItems:hover {
    color: black;
  }
  .activeNavItem {
    color: black;
  }
  ul {
    margin: 150px auto 0;
    padding: 0;
    list-style: none;
    display: table;
    width: 600px;
    text-align: center;
  }
  li {
    display: table-cell;
    position: relative;
    padding: 15px 0;
    float: right;
  }
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
    background-color: black;
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
  @media screen and (max-height: 300px) {
    ul {
      margin-top: 40px;
    }
  }

  .tooltip {
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 1px 0;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
  }
  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
`

// const  creativeNavbar = () => {
//     const { menu } = navLinks
//     return (
//       <StyledNav>
//         {menu.map(({ name, url }, key) => {
//           return (
//             <Link className="nav-link, nav-items" activeClassName="active-nav-link" key={key} to={url}>
//               {name}
//             </Link>
//           )
//         })}
//       </StyledNav>
//     )
//   }
// export default creativeNavbar

const creativeNav = () => {
  return (
    <StyledNav>
      <header className="header">
        <nav>
          <ul className="navList">
            <li>
              <Link
                className="navItems"
                activeClassName="activeNavItem"
                to="/creative"
              >
                Photography
              </Link>
            </li>
            <li>
              <Link
                className="navItems"
                activeClassName="activeNavItem"
                to="/videography"
              >
                Videography
              </Link>
            </li>
            <li>
              <Link
                className="navItems"
                activeClassName="activeNavItem"
                to="/myself"
              >
                Myself
              </Link>
            </li>
            <li>
              <Link
                className="navItems"
                activeClassName="activeNavItem"
                to="/creativecontact"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                className="navItems"
                href="https://www.instagram.com/theartist.ca"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>{" "}
            <div className="tooltip">
              𓅓 <span className="tooltiptext">Hoot!</span>
            </div>
          </ul>
        </nav>
      </header>
    </StyledNav>
  )
}
export default creativeNav
