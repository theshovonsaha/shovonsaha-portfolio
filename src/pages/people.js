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
    letter-spacing: 3px;
    font-style: bold;
    font-size: 20px;
  }
`
const people = props => {
  const data = useStaticQuery(graphql`
    query {
      peo: file(relativePath: { eq: "images/People/GirlsMountain.jpg" }) {
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
      peo1: file(relativePath: { eq: "images/People/MariyaBest.JPG" }) {
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
      peo2: file(
        relativePath: { eq: "images/People/SilvanaLightsCloseup.JPG" }
      ) {
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
      peo3: file(relativePath: { eq: "images/People/MariyaSitting.JPG" }) {
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
      peo4: file(relativePath: { eq: "images/People/YashMall.jpg" }) {
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
      peo5: file(relativePath: { eq: "images/People/Vishalgasclock.jpg" }) {
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
      peo6: file(relativePath: { eq: "images/People/Ben.jpg" }) {
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
      peo7: file(relativePath: { eq: "images/People/Tasha.JPG" }) {
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
      <StyledImageLayout className="grid">
        <h1>People</h1>
        <div>
          <Img fluid={data.peo.childImageSharp.fluid} alt="" />
        </div>
        <div>
          <Img fluid={data.peo1.childImageSharp.fluid} alt="" />
        </div>
        <div>
          <Img fluid={data.peo2.childImageSharp.fluid} alt="" />
        </div>
        <div>
          <Img fluid={data.peo3.childImageSharp.fluid} alt="" />
        </div>
        <div>
          <Img fluid={data.peo4.childImageSharp.fluid} alt="" />
        </div>
        <div>
          <Img fluid={data.peo5.childImageSharp.fluid} alt="" />
        </div>
        <div>
          <Img fluid={data.peo6.childImageSharp.fluid} alt="" />
        </div>
        <div>
          <Img fluid={data.peo7.childImageSharp.fluid} alt="" />
        </div>
      </StyledImageLayout>
    </Layout>
  )
}

export default people
