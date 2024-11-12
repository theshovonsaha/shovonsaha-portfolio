import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { motion } from "framer-motion"
import ImageCarousel from "./ImageCarousel"

const StyledGallery = styled.section`
  padding: 2rem;

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    justify-items: center;
  }

  h1 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 2rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`

const Gallery = ({ title, data }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <StyledGallery>
      <h1>{title}</h1>
      <div className="grid">
        {data.edges.map(({ node }, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            style={{ width: "100%", cursor: "pointer" }}
            onClick={() => handleImageClick(index)}
          >
            <Img
              fluid={node.childImageSharp.fluid}
              alt={`${title} Photography - ${node.name}`}
            />
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
