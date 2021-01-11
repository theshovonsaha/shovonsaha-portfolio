import React from 'react'
import Header from "../components/creativeHeader"
import Footer from "../components/creativeFooter"
import styled from "styled-components"
const StyledLayout = styled.nav`
.container{
    margin: 0 auto;
    max-width: 750px;
    padding: 1em;

    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.content {
    flex-grow: 1;
}
`


const creativeLayout = (props) => {
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