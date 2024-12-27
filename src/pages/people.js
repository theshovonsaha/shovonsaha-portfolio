import React from "react"
import Layout from "../components/creativeLayout"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import Gallery from "../components/Gallery"

const People = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "images/People" } }
        sort: { fields: name, order: ASC }
      ) {
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
        title="People Photography - Toronto Photographer | Shovon Saha"
        description="Discover a collection of People Photography by Shovon Saha, capturing the essence of Toronto's vibrant community."
      />
      <Gallery title="People" data={data.allFile} />
    </Layout>
  )
}

export default People
