import React from 'react'
import Layout from '../components/creativeLayout'
import {graphql, useStaticQuery, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"
import "../components/creativeHeader.css"
const StyledImageLayout = styled.p`
img{
    border-radius: 2%;
}
div{
  padding: 40px;
}
h1{
    display: grid;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-flow: 1;
    font-family: Shovon;
    letter-spacing: 2px;
    font-style: bold;
    font-size: 20px;
}

`
const street = () => {
  const data = useStaticQuery(graphql`
    query {
      abs: file(relativePath: { eq: "images/Abstract/KingBay.jpg" }) {
        childImageSharp {
          fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
          fixed(width: 370, height: 580) {
                    ...GatsbyImageSharpFixed
                  }
          }
        }
      abs1: file(relativePath: { eq: "images/Abstract/blueClockVNC.jpg" }) {
        childImageSharp {
          fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
          fixed(width: 370, height: 580) {
                  ...GatsbyImageSharpFixed
                }
          }
        }
      abs2: file(relativePath: { eq: "images/Abstract/granville.jpg" }) {
        childImageSharp {
          fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
          fixed(width: 370, height: 580) {
                  ...GatsbyImageSharpFixed
                }
          }  
        } 
      abs3: file(relativePath: { eq: "images/Abstract/ClockTowerReflection_1.jpg" }) {
        childImageSharp {
          fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
          fixed(width: 370, height: 580) {
                  ...GatsbyImageSharpFixed
                }
          }
        } 
     abs4: file(relativePath: { eq: "images/Abstract/goderhamBuilding.jpg" }) {
        childImageSharp {
          fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
          fixed(width: 370, height: 580) {
                  ...GatsbyImageSharpFixed
                }
          }
        }
    abs5: file(relativePath: { eq: "images/Abstract/muse.jpg" }) {
        childImageSharp {
          fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
          fixed(width: 370, height: 580) {
                  ...GatsbyImageSharpFixed
                }
          }
        }         
    abs6: file(relativePath: { eq: "images/Abstract/benHotel.JPG" }) {
        childImageSharp {
          fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
          fixed(width: 370, height: 580) {
                  ...GatsbyImageSharpFixed
                }
          }
        }         
    abs7: file(relativePath: { eq: "images/Abstract/VncStreet.jpg" }) {
        childImageSharp {
          fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
          fixed(width: 370, height: 580) {
                  ...GatsbyImageSharpFixed
                }
          }
        } 
     abs8: file(relativePath: { eq: "images/Abstract/VncStreetClock.jpg" }) {
        childImageSharp {
          fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
          fixed(width: 370, height: 580) {
                  ...GatsbyImageSharpFixed
                }
          }
        } 
    abs9: file(relativePath: { eq: "images/Abstract/cnReflection.jpg" }) {
        childImageSharp {
          fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
          fixed(width: 370, height: 580) {
                  ...GatsbyImageSharpFixed
                }
          }
        }                                     
      }
      `)
    return (
    <Layout >
      <StyledImageLayout >
        <h1>Abstract</h1>
        <div>
        <Img fluid={data.abs.childImageSharp.fluid} alt="" />
        </div>
        <div>
        <Img fluid={data.abs1.childImageSharp.fluid} alt="" />
        </div>
        <div>
        <Img fluid={data.abs2.childImageSharp.fluid} alt="" />      
        </div>
        <div>
        <Img fluid={data.abs3.childImageSharp.fluid} alt="" />
        </div>
        <div>
        <Img fluid={data.abs4.childImageSharp.fluid} alt="" />
        </div>
        <div>
        <Img fluid={data.abs5.childImageSharp.fluid} alt="" />
        </div>
        <div>
        <Img fluid={data.abs6.childImageSharp.fluid} alt="" />
        </div>
        <div>
        <Img fluid={data.abs7.childImageSharp.fluid} alt="" />
        </div>
        <div>
        <Img fluid={data.abs8.childImageSharp.fluid} alt="" />
        </div>
        <div>
        <Img fluid={data.abs9.childImageSharp.fluid} alt="" />
        </div>

      </StyledImageLayout>
    </Layout>
    )
}

export default street