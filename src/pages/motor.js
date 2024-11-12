import React from "react"
import Layout from "../components/creativeLayout"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import Gallery from "../components/Gallery"

const Motor = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "images/Car" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
            name
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Motor Photography - Toronto Photographer | Shovon Saha"
        description="Explore Motor Photography by Shovon Saha, showcasing the beauty of Toronto's automotive scene."
      />
      <Gallery title="Motor" data={data.allFile} />
    </Layout>
  )
}

export default Motor
