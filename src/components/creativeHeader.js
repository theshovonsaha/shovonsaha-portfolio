import React from "react"
import { Link } from "gatsby"
import Nav from "./creativeNav"
import styled from "styled-components"

const StyledHeader = styled.header`
  .header-content {
    text-align: center;
    padding: 3rem 1rem;
    background: white;
  }

  .name {
    display: inline-block;
    color: black;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: 0.15em;
    margin: 0;
    padding: 0;

    &:hover {
      transform: translateY(-2px);
    }
  }

  .subtitle {
    font-size: 1rem;
    color: #666;
    letter-spacing: 0.1em;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    .header-content {
      padding: 2rem 1rem;
    }

    .title {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 0.9rem;
    }
  }
`

const CreativeHeader = () => {
  return (
    <StyledHeader>
      <div className="header-content"></div>
      <Nav />
    </StyledHeader>
  )
}

export default CreativeHeader
