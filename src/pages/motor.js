import React from "react"
import Layout from "../components/creativeLayout"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
const StyledImageLayout = styled.p`
  img {
    border-radius: 2%;
  }
  div {
    padding: 40px;
  }
  h1 {
    display: grid;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-flow: 1;
    font-family: Shovon;
    letter-spacing: 3px;
    font-style: bold;
    font-size: 30px;
  }
`
const motor = () => {
  const data = useStaticQuery(graphql`
    query {
      m: file(relativePath: { eq: "images/Car/redwheel.jpg" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
          fixed(width: 400, height: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      m1: file(relativePath: { eq: "images/Car/LexusExhb.jpg" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
          fixed(width: 400, height: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      m2: file(relativePath: { eq: "images/Car/carFinal.jpg" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
          fixed(width: 400, height: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      m3: file(relativePath: { eq: "images/Car/LexusHalloween.jpg" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
          fixed(width: 400, height: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      m4: file(relativePath: { eq: "images/Car/NathanPhilipsGarage.JPG" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
          fixed(width: 400, height: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <StyledImageLayout>
        <h1>Motor</h1>
        <div>
          <Img fluid={data.m.childImageSharp.fluid} alt="" />
        </div>
        <div>
          <Img fluid={data.m1.childImageSharp.fluid} alt="" />
        </div>
        <div>
          <Img fluid={data.m2.childImageSharp.fluid} alt="" />
        </div>
        <div>
          <Img fluid={data.m3.childImageSharp.fluid} alt="" />
        </div>
        <div>
          <Img fluid={data.m4.childImageSharp.fluid} alt="" />
        </div>
      </StyledImageLayout>
    </Layout>
  )
}

export default motor
