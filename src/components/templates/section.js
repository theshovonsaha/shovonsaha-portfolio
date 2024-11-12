// SECTION TEMPLATE
// If you want to add more sections to your page, you can use this component as a template

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { motion } from "framer-motion"

import ContentWrapper from "../styles/contentWrapper"

const StyledSection = styled(motion.section)`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 6rem;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const StyledTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
`

const Section = ({ content }) => {
  // Extract GraphQL data
  const sectionDetails = content[0].node

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <StyledSection id={sectionDetails.frontmatter.hashId}>
      <StyledContentWrapper>
        <motion.div initial="hidden" animate="visible" variants={variants}>
          <StyledTitle>{sectionDetails.frontmatter.title}</StyledTitle>
          {/* Render section content here */}
          {sectionDetails.body && (
            <div dangerouslySetInnerHTML={{ __html: sectionDetails.body }} />
          )}
          {/* Additional section-specific content */}
        </motion.div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

Section.propTypes = {
  content: PropTypes.array.isRequired,
}

export default Section
