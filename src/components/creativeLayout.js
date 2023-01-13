import React from "react"
import Header from "../components/creativeHeader"
import Footer from "../components/creativeFooter"
import styled from "styled-components"
const StyledLayout = styled.div`
  .container {
    margin-left: 10px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 100vh;
  }

  .content {
    flex-grow: 1;
  }
`

const creativeLayout = props => {
  return (
    <StyledLayout>
      <div className="container">
        <div className="content">
          <Header />
          {props.children}
        </div>
        <Footer />
      </div>
    </StyledLayout>
  )
}

export default creativeLayout
