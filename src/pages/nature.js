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
        title="Nature Photography - Toronto Photographer | Shovon Saha"
        description="Discover Nature Photography by Shovon Saha, capturing the serenity and beauty of Toronto's landscapes."
      />
      <Gallery title="Nature" data={data.allFile} />
    </Layout>
  )
}

export default Nature
