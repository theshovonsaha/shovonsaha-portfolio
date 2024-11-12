import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import { motion, AnimatePresence } from "framer-motion"
import { IoClose, IoArrowBack, IoArrowForward } from "react-icons/io5"

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CarouselContainer = styled.div`
  position: relative;
  width: 90%;
  height: 90vh;
  max-width: 1200px;

  .image-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      max-height: 90vh;

      img {
        object-fit: contain !important;
      }
    }
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    z-index: 1001;
    padding: 0.5rem;
    border-radius: 50%;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    font-size: 2rem;
    padding: 1rem;
    cursor: pointer;
    border-radius: 50%;
    transition: background 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    &.prev {
      left: 1rem;
    }

    &.next {
      right: 1rem;
    }
  }

  .image-counter {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 1rem;
    background: rgba(0, 0, 0, 0.5);
    padding: 0.5rem 1rem;
    border-radius: 20px;
  }
`

const ImageCarousel = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  const currentImage = images[currentIndex]

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <CarouselContainer>
          <button className="close-button" onClick={onClose}>
            <IoClose />
          </button>
          <motion.div
            className="image-container"
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <Img
              fluid={currentImage.childImageSharp.fluid}
              alt={currentImage.name}
              imgStyle={{ objectFit: "contain" }}
              style={{ maxHeight: "90vh" }}
            />
          </motion.div>
          <button className="nav-button prev" onClick={onPrev}>
            <IoArrowBack />
          </button>
          <button className="nav-button next" onClick={onNext}>
            <IoArrowForward />
          </button>
          <div className="image-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </CarouselContainer>
      </Overlay>
    </AnimatePresence>
  )
}

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({
          aspectRatio: PropTypes.number,
          src: PropTypes.string,
          srcSet: PropTypes.string,
          sizes: PropTypes.string,
          base64: PropTypes.string,
          tracedSVG: PropTypes.string,
          srcWebp: PropTypes.string,
          srcSetWebp: PropTypes.string,
        }).isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
}

export default ImageCarousel
