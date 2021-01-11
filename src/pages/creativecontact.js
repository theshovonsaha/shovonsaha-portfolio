import React from 'react'
import Layout from "../components/creativeLayout"
import styled from "styled-components"
import Img from "gatsby-image"
import {graphql, useStaticQuery } from 'gatsby'

const Styledc = styled.nav`
.container{
    display: grid; 
}
a{
    text-decoration: none;
    color: grey;
}
p{
    justify-content: center;
    padding: 100px;
}
a:hover{
    color: black;
}
`
const creativecontact = () => {
    const data = useStaticQuery(graphql`
    query {
        insta: file(relativePath: { eq: "images/icons/insta.png" }) {
            childImageSharp {
                fluid {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                }
            
        }
      }
    }
    `)
    return (
        <Layout>
            <Styledc>
            <p className="container"> <a href={`mailto:"theshovonsaha@gmail.com"`}>Email: theshovonsaha@gmail.com</a></p>
            <Img fluid={data.insta.childImageSharp.fluid} alt="" />
            </Styledc>
        </Layout> 
    )
}

export default creativecontact 

