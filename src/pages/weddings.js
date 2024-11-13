import React from "react"
import Layout from "../components/creativeLayout"
import { graphql, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"
import SEO from "../components/seo"
import Gallery from "../components/Gallery"

const Weddings = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "images/Prewed" } }
        sort: { fields: name, order: ASC }
      ) {
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
        title="Wedding Photography - Toronto Photographer | Shovon Saha"
        description="Explore stunning Wedding Photography by Shovon Saha, capturing beautiful moments of couples in Toronto."
      />
      <Gallery title="Weddings" data={data.allFile} />
    </Layout>
  )
}

export default Weddings
