import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import ImageCarousel from "./ImageCarousel"

const StyledGallery = styled.section`
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 4rem;
  max-width: 1920px;
  width: 100%;

  .title-container {
    width: 100%;
    text-align: center;
    margin-bottom: 3rem;
    padding: 0 1rem;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin: 0;
    display: inline-block;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background-color: currentColor;
      opacity: 0.8;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 2px;
    background-color: #f5f5f5;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1px;
    }
  }

  .grid-item {
    position: relative;
    background-color: white;
    aspect-ratio: 3/4;
    overflow: hidden;

    @media (max-width: 768px) {
      aspect-ratio: 4/5;
    }
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transform: translateZ(0);
    background-color: #f8f8f8;

    &:before {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0);
      z-index: 1;
      transition: background 0.3s ease;
    }

    &:after {
      content: "View";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -40%);
      color: white;
      font-size: 1.25rem;
      font-weight: 500;
      opacity: 0;
      z-index: 2;
      transition: all 0.3s ease;
    }

    &:hover {
      &:before {
        background: rgba(0, 0, 0, 0.3);
      }

      &:after {
        opacity: 1;
        transform: translate(-50%, -50%);
      }

      .gatsby-image-wrapper {
        transform: scale(1.03);
      }
    }
  }

  .gatsby-image-wrapper {
    width: 100% !important;
    height: 100% !important;
    transition: transform 0.7s cubic-bezier(0.2, 0, 0.2, 1) !important;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.7s cubic-bezier(0.2, 0, 0.2, 1) !important;

    &.loaded {
      opacity: 1;
    }

    img {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      object-position: center center !important;
      transform: translateZ(0);
    }
  }
`

// LazyImage component remains the same...
const LazyImage = ({ node, alt, onClick, index }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const imageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(imageRef.current)
        }
      },
      {
        rootMargin: "50px 0px",
        threshold: 0.1,
      }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current)
      }
    }
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <motion.div
      ref={imageRef}
      className="image-container"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      {!isLoaded && <div className="placeholder" />}
      {(isVisible || index < 4) && (
        <Img
          fluid={node.childImageSharp.fluid}
          alt={alt}
          className={isLoaded ? "loaded" : ""}
          onLoad={handleLoad}
          loading={index < 4 ? "eager" : "lazy"}
          imgStyle={{
            objectFit: "cover",
            objectPosition: "center center",
            width: "100%",
            height: "100%",
          }}
        />
      )}
    </motion.div>
  )
}
LazyImage.propTypes = {
  node: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({
        aspectRatio: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        srcSet: PropTypes.string.isRequired,
        sizes: PropTypes.string.isRequired,
        base64: PropTypes.string,
        tracedSVG: PropTypes.string,
        srcWebp: PropTypes.string,
        srcSetWebp: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}
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

  useEffect(() => {
    const handleKeyPress = e => {
      if (selectedImage) {
        if (e.key === "Escape") handleClose()
        if (e.key === "ArrowRight") handleNext()
        if (e.key === "ArrowLeft") handlePrev()
      }
    }

    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [selectedImage])

  return (
    <StyledGallery>
      <motion.div
        className="title-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="title">{title}</h1>
      </motion.div>

      <div className="grid">
        <AnimatePresence>
          {data.edges.map(({ node }, index) => (
            <motion.div
              key={index}
              className="grid-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <LazyImage
                node={node}
                alt={title}
                index={index}
                onClick={() => handleImageClick(index)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
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
            fluid: PropTypes.shape({
              aspectRatio: PropTypes.number.isRequired,
              src: PropTypes.string.isRequired,
              srcSet: PropTypes.string.isRequired,
              sizes: PropTypes.string.isRequired,
              // Optional fields
              base64: PropTypes.string,
              tracedSVG: PropTypes.string,
              srcWebp: PropTypes.string,
              srcSetWebp: PropTypes.string,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
}

export default Gallery
