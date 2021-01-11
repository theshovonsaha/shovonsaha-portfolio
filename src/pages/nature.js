import React from 'react'
import Layout from '../components/creativeLayout'
import {graphql, useStaticQuery, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"
const StyledImageLayout = styled.p`

img{
    border-radius: 2%;
}
div{
    padding:40px;
}
h1{
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
const nature = () => {
        const data = useStaticQuery(graphql`
        query {
            nat: file(relativePath: { eq: "images/Nature/SnowMountains.jpg" }) {
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
            nat1: file(relativePath: { eq: "images/Nature/sunsetBushes.JPG" }) {
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
            nat2: file(relativePath: { eq: "images/Nature/YorkStormySunset.JPG" }) {
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
            nat3: file(relativePath: { eq: "images/Nature/BurrardViewBeach.JPG" }) {
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
              nat4: file(relativePath: { eq: "images/Nature/beachLogsVancouver.JPG" }) {
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
    <Layout >
      <StyledImageLayout >
        <h1>Nature</h1>
        <div>
        <Img fluid={data.nat.childImageSharp.fluid} alt="" />
        </div>
        <div>
        <Img fluid={data.nat1.childImageSharp.fluid} alt="" />
        </div>
        <div>
        <Img fluid={data.nat2.childImageSharp.fluid} alt="" />
        </div>
        <div>
        <Img fluid={data.nat3.childImageSharp.fluid} alt="" />
        </div>
        <div>
        <Img fluid={data.nat4.childImageSharp.fluid} alt="" />
        </div>
      </StyledImageLayout>
    </Layout>
    )
}

export default nature