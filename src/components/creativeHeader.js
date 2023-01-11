import React from "react"
import { Link } from "gatsby"
import Nav from "./creativeNav"
import styled from "styled-components"
const StyledHeader = styled.nav`
  .name {
    display: flex;
    justify-content: space-around;
    letter-spacing: 2px;
    font-style: bold;
    font-size: 40px;
    padding: 3vh;
    text-decoration: none;
    color: black;
    font-family: Shovon;
  }
  @font-face {
    font-family: "Shovon";
    src: url("../../content/fonts/name.ttf");
  }
`
const creativeHeader = () => {
  return (
    <StyledHeader>
      <h1>
        <Link className="name" to="/">
          Shovon Saha
        </Link>
      </h1>
      <Nav />
    </StyledHeader>
  )
}
export default creativeHeader
