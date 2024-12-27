import React from "react"
import Layout from "../components/creativeLayout"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import Gallery from "../components/Gallery"

const Street = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "images/Abstract" } }) {
        edges {
          node {
            childImageSharp {
              fluid(
                maxWidth: 1920
                quality: 100
                srcSetBreakpoints: [400, 600, 800, 1200, 1920]
              ) {
                ...GatsbyImageSharpFluid_withWebp
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
        title="Abstract Photography - Toronto Photographer | Shovon Saha"
        description="Explore Abstract Photography by Shovon Saha, showcasing the beauty of Toronto's abstract art scene."
      />
      <Gallery title="Abstract" data={data.allFile} />
    </Layout>
  )
}

export default Street
