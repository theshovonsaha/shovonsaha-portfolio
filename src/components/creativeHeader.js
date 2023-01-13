import React from "react"
import { Link } from "gatsby"
import Nav from "./creativeNav"
import styled from "styled-components"
const StyledHeader = styled.div`
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
      <Link className="name" to="/creative">
        Shovon Saha
      </Link>
      <Nav />
    </StyledHeader>
  )
}
export default creativeHeader
