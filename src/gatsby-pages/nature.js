import React from "react"
import Layout from "../components/creativeLayout"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import Gallery from "../components/Gallery"

const Nature = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "images/Nature" } }) {
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
        title="Nature Photography - Toronto Photographer | Shovon Saha"
        description="Discover Nature Photography by Shovon Saha, capturing the serenity and beauty of Toronto's landscapes."
      />
      <Gallery title="Nature" data={data.allFile} />
    </Layout>
  )
}

export default Nature
