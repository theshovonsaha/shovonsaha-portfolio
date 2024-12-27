import React from "react"
import Header from "./creativeHeader"
import Footer from "./creativeFooter"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledLayout = styled.div`
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .content {
    flex: 1 0 auto;
    width: 100%;
    max-width: 1800px;
    margin: 0 auto;
    padding: 0 1rem;

    @media (min-width: 1024px) {
      padding: 0 2rem;
    }
  }

  /* Global styles */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Modified to exclude gatsby-image-wrapper images */
  img:not(.gatsby-image-wrapper img) {
    max-width: 100%;
    height: auto;
  }

  /* Allow gatsby-image-wrapper to maintain its own sizing */
  .gatsby-image-wrapper {
    img {
      height: 100% !important;
    }
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Better font rendering */
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
`

const CreativeLayout = ({ children }) => {
  return (
    <StyledLayout>
      <div className="container">
        <Header />
        <main className="content">{children}</main>
        <Footer />
      </div>
    </StyledLayout>
  )
}

CreativeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CreativeLayout
