import React from "react"
import Layout from "../components/creativeLayout"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Styledc = styled.p`
img{
    border-radius: 3px:
}
div {
    color: grey;
    justify-content: center;
}
Link {

}
`
const myself = () => {
  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "images/me/jump.jpg" }) {
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
      <Styledc>
        <div>
          {" "}
          Hi I am passionate about photography and videography! My goal is to
          provide visual pleasures to the world. I hope you enjoy my work. I am
          still exploring my style. Looking forward to work with you. to contact
          me click <Link to="/creativecontact"> 𓅓 </Link>
          {/* <Img fixed={data.me.childImageSharp.fixed} alt="" /> */}
        </div>
      </Styledc>
    </Layout>
  )
}

export default myself
