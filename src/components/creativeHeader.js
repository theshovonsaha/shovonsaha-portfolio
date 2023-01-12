import React from "react"
import { Link } from "gatsby"
import Nav from "./creativeNav"
import styled from "styled-components"
const StyledHeader = styled.nav`
  .name {
    display: flex;
    justify-content: center;
    letter-spacing: 2px;
    font-size: 40px;
    padding: 3vh;
    text-decoration: none;
    color: black;
  }
`
const creativeHeader = () => {
  return (
    <StyledHeader>
      <h1>
        <Link className="name" to="/creative">
          Shovon Saha
        </Link>
      </h1>
      <Nav />
    </StyledHeader>
  )
}
export default creativeHeader
