import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from "styled-components"
const StyledNav = styled.nav`
.header {
    padding: 1rem 0 3rem;
    display: flex;
    justify-content: space-around;
    
}
.name{
    text-decoration: none;
    color: black;
}
.navList {
    display: flex;
    list-style-type: none;
    margin: 0;
    font-family: 'Nanum Gothic', sans-serif;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    flex-flow: row;
}

.navItems {
    color: grey;
    font-size: .9rem;
    margin-right: .9rem;
    text-decoration: none;
    letter-spacing: 1px;

}
.navItems:hover {
    color: black;
}
.activeNavItem {
    color: black;
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

const  creativeNav = () => {

    return (
        <StyledNav>
        <header className="header">
            <nav>
                <ul className="navList">
                    <li>
                        <Link className="navItems" activeClassName="activeNavItem" to = "/creative">Photography</Link>
                    </li>
                    <li>
                        <Link className="navItems" activeClassName="activeNavItem" to = "/videography">Videography</Link>
                    </li>
                    <li>
                        <Link className="navItems" activeClassName="activeNavItem" to = "/myself">Myself</Link>
                    </li>
                    <li>
                        <Link className="navItems" activeClassName="activeNavItem" to = "/creativecontact">Contact</Link>
                    </li>
                    <li>
                        <a className="navItems" href="https://www.instagram.com/theshovonsaha" target="_blank">Instagram</a> 
                    </li> <div className="tooltip">𓅓 <span className="tooltiptext">Hoot!</span></div>
                </ul>
            </nav>
        </header>
        </StyledNav>
    )
}
export default creativeNav