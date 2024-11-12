import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"

const StyledFooter = styled.footer`
  padding: 1.5rem 0;
  text-align: center;
  font-size: 0.9rem;

  p {
    margin: 0;
    color: #555;
  }
`

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const CreativeFooter = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <StyledFooter>
      <motion.p initial="hidden" animate="visible" variants={footerVariants}>
        Created by {data.site.siteMetadata.author}, ©2021
      </motion.p>
    </StyledFooter>
  )
}

export default CreativeFooter
