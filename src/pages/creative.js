import React from "react"
import Layout from "../components/creativeLayout"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { motion } from "framer-motion"
import SEO from "../components/seo"

const StyledCreative = styled.section`
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    justify-items: center;
    padding: 2rem 0;
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    padding-top: 100%;
    cursor: pointer;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: opacity 0.3s ease;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .image-wrapper:hover .overlay {
    opacity: 0;
  }

  .image-wrapper:hover img {
    transform: scale(1);
  }

  .image-wrapper > a > div {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-wrapper img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
`

const creative = () => {
  const data = useStaticQuery(graphql`
    query {
      people: file(relativePath: { eq: "images/People/MariyaBest.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      street: file(relativePath: { eq: "images/Abstract/blueClockVNC.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nature: file(relativePath: { eq: "images/Nature/SnowMountains.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cars: file(relativePath: { eq: "images/Car/Barbataus.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const images = [
    { name: "People", data: data.people, link: "/people" },
    { name: "Abstract", data: data.street, link: "/street" },
    { name: "Nature", data: data.nature, link: "/nature" },
    { name: "Motor", data: data.cars, link: "/motor" },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <Layout>
      <SEO
        title="Creative Photography - Toronto Photographer"
        description="Explore my creative photography portfolio showcasing People, Abstract, Nature, and Motor themes in Toronto."
      />
      <StyledCreative>
        <motion.div
          className="grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {images.map((image, index) => (
            <motion.div
              className="image-wrapper"
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1 }}
            >
              <Link to={image.link} aria-label={`${image.name} Photography`}>
                <Img
                  fluid={image.data.childImageSharp.fluid}
                  alt={`${image.name} Photography in Toronto`}
                />
                <div className="overlay">{image.name}</div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </StyledCreative>
    </Layout>
  )
}

export default creative
