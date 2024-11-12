import React from "react"
import Layout from "../components/creativeLayout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { motion } from "framer-motion"
import SEO from "../components/seo"

const StyledMyself = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  .content {
    max-width: 600px;
    text-align: center;
    font-size: 1.2rem;
    color: #333;
  }

  .profile-image {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    .profile-image {
      width: 200px;
      height: 200px;
    }
  }
`

const myself = () => {
  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "images/me/jump.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <Layout>
      <SEO
        title="About Me - Shovon Saha | Toronto Photographer"
        description="Learn more about Shovon Saha, a passionate Toronto-based photographer and videographer dedicated to capturing stunning visuals."
      />
      <StyledMyself>
        <motion.div
          className="profile-image"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <Img
            fluid={data.me.childImageSharp.fluid}
            alt="Shovon Saha - Toronto Photographer"
          />
        </motion.div>
        <motion.div
          className="content"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          Hi, I am passionate about photography and videography! My goal is to
          provide visual pleasures to the world. I hope you enjoy my work. I am
          still exploring my style. Looking forward to working with you. To
          contact me, click <Link to="/creativecontact">𓅓</Link>
        </motion.div>
      </StyledMyself>
    </Layout>
  )
}

export default myself
