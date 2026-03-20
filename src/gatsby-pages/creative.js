import React, { useMemo } from "react"
import Layout from "../components/creativeLayout"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import SEO from "../components/seo"
import styled from "styled-components"

const StyledPortfolio = styled.div`
  .portfolio-container {
    max-width: 2200px;
    margin: 0 auto;
    padding: 4rem 2rem;
    will-change: transform;

    @media (min-width: 768px) {
      padding: 6rem 4rem;
    }
  }

  .portfolio-title {
    text-align: center;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 300;
    margin-bottom: 4rem;
    letter-spacing: 0.1em;
  }

  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2rem;
    contain: content;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .category {
    grid-column: span 12;
    position: relative;
    overflow: hidden;
    background: #fff;
    transition: transform 0.4s ease;
    contain: paint;

    @media (min-width: 768px) {
      &.half {
        grid-column: span 6;
      }
      &.third {
        grid-column: span 4;
      }
      &.two-thirds {
        grid-column: span 8;
      }
    }

    &:hover {
      .category-image {
        transform: scale(1.05);
      }

      .category-info {
        opacity: 1;
      }

      .category-title,
      .category-meta {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  .category-link {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    aspect-ratio: 3/4;
  }

  .category-image {
    position: absolute !important;
    inset: 0;
    width: 100% !important;
    height: 100% !important;
    transition: transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
    will-change: transform;
    backface-visibility: hidden;

    img {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
    }
  }

  .category-info {
    position: absolute;
    inset: 0;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  .category-title {
    color: #fff;
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 400;
    margin-bottom: 0.5rem;
    transform: translateY(20px);
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .category-meta {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    font-weight: 300;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s;
  }
`

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      people: file(relativePath: { eq: "images/People/MariyaBest.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      prewed: file(
        relativePath: { eq: "images/CreativeTiles/SargamDramatic.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      street: file(relativePath: { eq: "images/Abstract/blueClockVNC.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      nature: file(relativePath: { eq: "images/Nature/SnowMountains.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cars: file(relativePath: { eq: "images/Car/carFinal.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const categories = useMemo(
    () => [
      {
        name: "Portrait Photography",
        description: "Capturing Personalities & Stories",
        count: "24 Collections",
        image: data.people,
        link: "/people",
        size: "third",
      },
      {
        name: "Wedding Stories",
        description: "Timeless Moments & Emotions",
        count: "32 Events",
        image: data.prewed,
        link: "/weddings",
        size: "third",
      },
      {
        name: "Events",
        description: "Professional & Dynamic Coverage",
        count: "",
        image: data.street,
        link: "/404",
        size: "third",
      },
      {
        name: "Fine Art Photography",
        description: "Creative & Conceptual Vision",
        count: "Series",
        image: data.street,
        link: "/street",
        size: "third",
      },
      {
        name: "Automotive Photography",
        description: "Performance & Aesthetic",
        count: "16 Showcases",
        image: data.cars,
        link: "/motor",
        size: "third",
      },
      {
        name: "Nature Photography",
        description: "Landscapes & Wildlife",
        count: "16 Showcases",
        image: data.nature,
        link: "/nature",
        size: "third",
      },
    ],
    [data]
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
      },
    }),
  }

  return (
    <Layout>
      <SEO
        title="Professional Photography Portfolio - Shovon Saha | Toronto"
        description="Discover exceptional portrait, wedding, corporate, and automotive photography by Toronto-based photographer Shovon Saha. Creating visual stories that leave lasting impressions."
      />
      <StyledPortfolio>
        <div className="portfolio-container">
          <h1 className="portfolio-title">MY PORTFOLIO</h1>
          <motion.div
            className="portfolio-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                className={`category ${category.size}`}
                variants={itemVariants}
                custom={index}
              >
                <Link to={category.link} className="category-link">
                  <Img
                    fluid={category.image.childImageSharp.fluid}
                    className="category-image"
                    alt={category.name}
                    loading={index < 3 ? "eager" : "lazy"}
                    fadeIn={index >= 3}
                  />
                  <div className="category-info">
                    <h2 className="category-title">{category.name}</h2>
                    <div className="category-meta">
                      <span>{category.description}</span>
                      {category.count && <span>{category.count}</span>}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </StyledPortfolio>
    </Layout>
  )
}

export default PortfolioPage
