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
        title="Abstract Photography - Toronto Photographer | Shovon Saha"
        description="Explore Abstract Photography by Shovon Saha, showcasing the beauty of Toronto's abstract art scene."
      />
      <Gallery title="Abstract" data={data.allFile} />
    </Layout>
  )
}

export default Street
