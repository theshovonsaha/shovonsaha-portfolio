import React from 'react'
import { Link } from 'gatsby'
import Nav from './creativeNav'
import styled from "styled-components"
import "./creativeHeader.css"
const StyledHeader = styled.nav`
.header {
    
    display: flex;
    justify-content: space-around;
    font-family: Shovon;
    letter-spacing: 2px;
    font-style: bold;
    font-size: 40px;
    
    
}
.name{
    text-decoration: none;
    color: black;
    
}
`
const  creativeHeader = () => {

    return (
        <StyledHeader>
            <h1 className="header">
                <Link className="name" to="/">Shovon Saha</Link>
            </h1>
            <Nav/>
        </StyledHeader>
    )
}
export default creativeHeader 