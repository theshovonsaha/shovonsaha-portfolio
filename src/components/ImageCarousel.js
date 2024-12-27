import React, { useState } from "react"
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
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 90vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none; // Prevents default touch actions

  .gatsby-image-wrapper {
    max-width: 90vw !important;
    max-height: 90vh !important;
    width: auto !important;
    height: auto !important;

    img {
      object-fit: contain !important;
      max-width: 90vw !important;
      max-height: 90vh !important;
    }
  }

  .fallback-image {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 90vw;
      max-height: 90vh;
      width: auto;
      height: auto;
      object-fit: contain;
    }
  }
`

const Button = styled.button`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  opacity: 0.8;
  transition: all 0.2s ease-out;
  z-index: 10000;

  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.7);
  }

  svg {
    transition: transform 0.2s ease-out;
  }
`

const CloseButton = styled(Button)`
  top: 1.5rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;

  svg {
    font-size: 1.5rem;
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
`

const NavButton = styled(Button)`
  top: 50%;
  transform: translateY(-50%);
  width: 3.5rem;
  height: 3.5rem;

  svg {
    font-size: 1.5rem;
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

  @media (max-width: 768px) {
    width: 2.75rem;
    height: 2.75rem;

    svg {
      font-size: 1.25rem;
    }

    &.prev {
      left: 0.75rem;
    }

    &.next {
      right: 0.75rem;
    }
  }
`

const ImageInfo = styled.div`
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  z-index: 10000;

  @media (max-width: 768px) {
    bottom: 1rem;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
`

const ImageCarousel = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  const currentImage = images[currentIndex]
  const [dragStart, setDragStart] = useState(null)
  const SWIPE_THRESHOLD = 50 // minimum distance for swipe

  const handleTouchStart = e => {
    setDragStart(e.touches[0].clientX)
  }

  const handleTouchMove = e => {
    if (!dragStart) return

    const currentPosition = e.touches[0].clientX
    const difference = dragStart - currentPosition

    // Prevent default to stop scrolling
    if (Math.abs(difference) > 10) {
      e.preventDefault()
    }
  }

  const handleTouchEnd = e => {
    if (!dragStart) return

    const currentPosition = e.changedTouches[0].clientX
    const difference = dragStart - currentPosition

    if (Math.abs(difference) > SWIPE_THRESHOLD) {
      if (difference > 0) {
        // Swiped left
        onNext()
      } else {
        // Swiped right
        onPrev()
      }
    }

    setDragStart(null)
  }

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <CarouselContainer>
          <CloseButton onClick={onClose}>
            <IoClose />
          </CloseButton>

          <ImageContainer
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Primary Gatsby Image */}
            <Img
              fluid={currentImage.childImageSharp.fluid}
              alt={currentImage.name || "Gallery image"}
              imgStyle={{
                objectFit: "contain",
                maxWidth: "90vw",
                maxHeight: "90vh",
              }}
            />

            {/* Fallback image for reliability */}
            <div className="fallback-image">
              <img
                src={currentImage.childImageSharp.fluid.src}
                alt={currentImage.name || "Gallery image"}
              />
            </div>
          </ImageContainer>

          <NavButton className="prev" onClick={onPrev}>
            <IoArrowBack />
          </NavButton>

          <NavButton className="next" onClick={onNext}>
            <IoArrowForward />
          </NavButton>

          <ImageInfo>
            <span>
              {currentIndex + 1} of {images.length}
            </span>
          </ImageInfo>
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
      name: PropTypes.string,
    })
  ).isRequired,
  currentIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
}

export default ImageCarousel
