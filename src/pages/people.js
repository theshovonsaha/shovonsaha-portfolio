import React from "react"
import Layout from "../components/creativeLayout"
import { graphql, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"
import SEO from "../components/seo"
import Gallery from "../components/Gallery"

const People = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "images/People" } }) {
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
        title="People Photography - Toronto Photographer | Shovon Saha"
        description="Discover a collection of People Photography by Shovon Saha, capturing the essence of Toronto's vibrant community."
      />
      <Gallery title="People" data={data.allFile} />
    </Layout>
  )
}

export default People
