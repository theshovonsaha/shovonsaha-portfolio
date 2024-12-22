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
  background: #000;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CarouselContainer = styled.div`
  position: relative;
  width: 95%;
  height: 95vh;
  max-width: 2000px;
  display: flex;
  align-items: center;
  justify-content: center;

  .image-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    @media (max-width: 768px) {
      padding: 1rem;
    }

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      max-height: 95vh;

      img {
        object-fit: contain !important;
      }
    }
  }

  .close-button {
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    opacity: 0.8;
    transition: all 0.2s ease-out;

    svg {
      font-size: 1.5rem;
      transition: transform 0.2s ease-out;
    }

    &:hover {
      opacity: 1;
      background: rgba(255, 255, 255, 0.1);
      transform: rotate(90deg);
    }

    @media (max-width: 768px) {
      top: 1rem;
      right: 1rem;
      width: 2.5rem;
      height: 2.5rem;

      svg {
        font-size: 1.25rem;
      }
    }
  }

  .nav-button {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.15);
    border: 2px solid rgba(255, 255, 255, 0.3);
    color: white;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    opacity: 1;
    transition: all 0.2s ease-out;

    svg {
      font-size: 1.5rem;
      transition: transform 0.2s ease-out;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.5);
    }

    &.prev {
      left: 1.5rem;
      padding-right: 3px;

      &:hover svg {
        transform: translateX(-2px);
      }
    }

    &.next {
      right: 1.5rem;
      padding-left: 3px;

      &:hover svg {
        transform: translateX(2px);
      }
    }
  }

    @media (max-width: 768px) {
      width: 2.75rem;
      height: 2.75rem;

      svg {
        font-size: 1.25rem;
      }

      &.prev {
        left: 1rem;
      }

      &.next {
        right: 1rem;
      }
    }
  }

  .image-info {
    position: fixed;
    bottom: 3rem;
    transform: translateX(-50%);
    color: white;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.875rem;
    letter-spacing: 0.5px;
    opacity: 0.8;

    .divider {
      width: 3px;
      height: 3px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
    }

    @media (max-width: 768px) {
      bottom: 1rem;
      padding: 0.5rem 1rem;
      font-size: 0.75rem;
    }
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
        transition={{ duration: 0.2 }}
      >
        <CarouselContainer>
          <motion.button
            className="close-button"
            onClick={onClose}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <IoClose />
          </motion.button>

          <motion.div
            className="image-container"
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Img
              fluid={currentImage.childImageSharp.fluid}
              alt={currentImage.name}
              imgStyle={{ objectFit: "contain" }}
            />
          </motion.div>

          <motion.button
            className="nav-button prev"
            onClick={onPrev}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <IoArrowBack />
          </motion.button>

          <motion.button
            className="nav-button next"
            onClick={onNext}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <IoArrowForward />
          </motion.button>

          <motion.div
            className="image-info"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span>
              {currentIndex + 1} of {images.length}
            </span>
          </motion.div>
        </CarouselContainer>
      </Overlay>
    </AnimatePresence>
  )
}

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
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
