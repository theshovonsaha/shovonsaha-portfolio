import React from "react"
import Layout from "../components/creativeLayout"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import SEO from "../components/seo"
import styled from "styled-components"

const StyledPortfolio = styled.div`
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    position: relative;
    overflow: hidden;
  }

  .hero-content {
    text-align: center;
    max-width: 900px;
    z-index: 2;
  }

  .hero-title {
    font-size: clamp(3rem, 6vw, 4.5rem);
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .hero-subtitle {
    font-size: clamp(1.25rem, 2.5vw, 1.5rem);
    color: #4a4a4a;
    line-height: 1.6;
    margin-bottom: 3rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  .scroll-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: #1a1a1a;
    color: white;
    border-radius: 3rem;
    font-size: 1rem;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;

    &:hover {
      transform: translateY(-2px);
      background: transparent;
      color: #1a1a1a;
      border-color: #1a1a1a;
    }
  }

  .portfolio {
    padding: 8rem 2rem;
    background: #fafafa;

    @media (min-width: 768px) {
      padding: 10rem 4rem;
    }
  }

  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2rem;
    max-width: 2200px;
    margin: 0 auto;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  .category {
    position: relative;
    border-radius: 1.5rem;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    grid-column: span 12;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    @media (min-width: 768px) {
      &.half {
        grid-column: span 6;
        aspect-ratio: 3/2;
      }
      &.third {
        grid-column: span 4;
        aspect-ratio: 2/3;
      }
      &.two-thirds {
        grid-column: span 8;
        aspect-ratio: 16/9;
      }
    }

    @media (max-width: 767px) {
      aspect-ratio: 16/9;
    }

    &:hover {
      transform: translateY(-6px) scale(1.01);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);

      .category-image {
        transform: scale(1.05);
      }

      .category-info {
        transform: translateY(0);
        background: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.95) 0%,
          rgba(0, 0, 0, 0.7) 50%,
          rgba(0, 0, 0, 0.3) 100%
        );
      }

      .category-title {
        transform: translateY(0);
        opacity: 1;
      }

      .category-meta {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  .category-link {
    display: block;
    height: 100%;
    width: 100%;
    position: relative;
  }

  .category-image {
    position: absolute !important;
    inset: 0;
    width: 100% !important;
    height: 100% !important;
    transition: transform 0.7s cubic-bezier(0.215, 0.61, 0.355, 1);

    img {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      object-position: center center !important;
      transform: scale(1.01);
    }
  }

  .category-info {
    position: absolute;
    inset: 0;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.2) 100%
    );
    transition: all 0.4s ease;
  }

  .category-title {
    color: #fff;
    font-size: clamp(1.75rem, 2.5vw, 2.25rem);
    font-weight: 600;
    margin-bottom: 1rem;
    line-height: 1.2;
    transform: translateY(10px);
    transition: all 0.4s ease;
  }

  .category-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.25rem;
    color: rgba(255, 255, 255, 0.95);
    font-size: 1rem;
    transform: translateY(10px);
    transition: all 0.4s ease 0.1s;

    .dot {
      width: 4px;
      height: 4px;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 50%;
    }
  }
`

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      people: file(relativePath: { eq: "images/People/MariyaBest.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      prewed: file(
        relativePath: { eq: "images/CreativeTiles/SargamDramatic.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      street: file(relativePath: { eq: "images/Abstract/blueClockVNC.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      nature: file(relativePath: { eq: "images/Nature/SnowMountains.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cars: file(relativePath: { eq: "images/Car/carFinal.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const categories = [
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
      name: "Corporate Events",
      description: "Professional & Dynamic Coverage",
      count: "28 Events",
      image: data.street,
      link: "/creative",
      size: "third",
    },
    {
      name: "Commercial Projects",
      description: "Brand & Product Excellence",
      count: "20 Projects",
      image: data.nature,
      link: "/people",
      size: "half",
    },
    {
      name: "Fine Art Photography",
      description: "Creative & Conceptual Vision",
      count: "18 Series",
      image: data.street,
      link: "/street",
      size: "half",
    },
    {
      name: "Automotive Photography",
      description: "Performance & Aesthetic",
      count: "16 Showcases",
      image: data.cars,
      link: "/motor",
      size: "half",
    },
    {
      name: "Nature Photography",
      description: "Landscapes & Wildlife",
      count: "16 Showcases",
      image: data.nature,
      link: "/nature",
      size: "half",
    },
  ]

  const scrollToPortfolio = () => {
    document.querySelector(".portfolio")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Layout>
      <SEO
        title="Professional Photography Portfolio - Shovon Saha | Toronto"
        description="Discover exceptional portrait, wedding, corporate, and automotive photography by Toronto-based photographer Shovon Saha. Creating visual stories that leave lasting impressions."
      />
      <StyledPortfolio>
        <section className="hero">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="hero-title">Visual Stories That Leave an Impact</h1>
            <p className="hero-subtitle">
              Toronto&apos;s distinctive photography service crafting powerful
              visual narratives for portraits, weddings, corporate events, and
              automotive photography.
            </p>
            <motion.button
              className="scroll-btn"
              onClick={scrollToPortfolio}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
            >
              Explore Portfolio →
            </motion.button>
          </motion.div>
        </section>

        <section className="portfolio">
          <div className="portfolio-grid">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                className={`category ${category.size}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={category.link} className="category-link">
                  <Img
                    fluid={category.image.childImageSharp.fluid}
                    className="category-image"
                    alt={`${category.name} by Shovon Saha`}
                  />
                  <div className="category-info">
                    <h2 className="category-title">{category.name}</h2>
                    <div className="category-meta">
                      <span>{category.description}</span>
                      <div className="dot" />
                      <span>{category.count}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </StyledPortfolio>
    </Layout>
  )
}

export default PortfolioPage
