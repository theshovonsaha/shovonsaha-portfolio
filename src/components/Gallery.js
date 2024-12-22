import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { motion } from "framer-motion"
import ImageCarousel from "./ImageCarousel"

const StyledGallery = styled.section`
  padding: 2rem;
  max-width: 2000px;
  margin: 0 auto;
  overflow: hidden;

  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1rem;
    margin: -0.5rem; // Negative margin to counter padding

    @media (max-width: 1200px) {
      grid-template-columns: repeat(8, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .grid-item {
    position: relative;
    padding: 0.5rem;
    grid-column: span 4;
    aspect-ratio: 3/4;

    &.landscape {
      grid-column: span 6;
      aspect-ratio: 16/9;
    }

    &.portrait {
      grid-column: span 3;
      aspect-ratio: 2/3;
    }

    &.featured {
      grid-column: span 6;
      aspect-ratio: 1;
    }

    @media (max-width: 1200px) {
      grid-column: span 4;

      &.landscape {
        grid-column: span 8;
      }

      &.portrait {
        grid-column: span 4;
      }

      &.featured {
        grid-column: span 8;
      }
    }

    @media (max-width: 768px) {
      grid-column: span 2;

      &.landscape,
      &.featured {
        grid-column: span 4;
      }

      &.portrait {
        grid-column: span 2;
      }
    }

    @media (max-width: 480px) {
      grid-column: span 2;

      &.landscape,
      &.portrait,
      &.featured {
        grid-column: span 2;
      }
    }
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: translateY(-4px);
    }

    .gatsby-image-wrapper {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  h1 {
    text-align: center;
    margin: 0 0 3rem;
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: #1a1a1a;

    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }

  .image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0) 50%
    );
    opacity: 0;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }
`

const Gallery = ({ title, data }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const getImageStyle = (index, node) => {
    // Calculate aspect ratio from the image dimensions
    const aspectRatio = node.childImageSharp.fluid.aspectRatio

    if (index === 0) return "featured"
    if (aspectRatio > 1.3) return "landscape"
    if (aspectRatio < 0.8) return "portrait"
    return ""
  }

  const handleImageClick = index => {
    setSelectedImage(true)
    setCurrentIndex(index)
  }

  const handleClose = () => {
    setSelectedImage(null)
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % data.edges.length)
  }

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? data.edges.length - 1 : prev - 1))
  }

  const handleKeyPress = e => {
    if (selectedImage) {
      if (e.key === "Escape") handleClose()
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "ArrowLeft") handlePrev()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [selectedImage])

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  }

  return (
    <StyledGallery>
      <h1>{title}</h1>
      <div className="grid">
        {data.edges.map(({ node }, index) => (
          <motion.div
            key={index}
            className={`grid-item ${getImageStyle(index, node)}`}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className="image-container"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleImageClick(index)}
            >
              <Img
                fluid={node.childImageSharp.fluid}
                alt={`${title} Photography - ${node.name}`}
                loading={index < 4 ? "eager" : "lazy"}
                imgStyle={{ objectFit: "cover" }}
              />
              <div className="image-overlay" />
            </motion.div>
          </motion.div>
        ))}
      </div>
      {selectedImage && (
        <ImageCarousel
          images={data.edges.map(({ node }) => node)}
          currentIndex={currentIndex}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </StyledGallery>
  )
}

Gallery.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            fluid: PropTypes.object.isRequired,
          }).isRequired,
          name: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
}

export default Gallery
