import React from "react"
import Layout from "../components/creativeLayout"
import styled from "styled-components"
import { motion } from "framer-motion"

const StyledVideography = styled.section`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-items: center;

  iframe {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }
  }

  @media (min-width: 768px) {
    iframe {
      height: 280px;
    }
  }
`

const Videography = () => {
  const variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <Layout>
      <StyledVideography>
        <motion.iframe
          src="https://www.youtube.com/embed/GmgZxyuW_kc"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          initial="hidden"
          animate="visible"
          variants={variants}
          whileHover={{ scale: 1.05 }}
        ></motion.iframe>
        <motion.iframe
          src="https://www.youtube.com/embed/eFPLmUfnG3g"
          title="Toronto Tattoo B Roll | SONY A6400"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          initial="hidden"
          animate="visible"
          variants={variants}
          whileHover={{ scale: 1.05 }}
        ></motion.iframe>
        <motion.iframe
          src="https://www.youtube.com/embed/y2zhEHwYRNE"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          initial="hidden"
          animate="visible"
          variants={variants}
          whileHover={{ scale: 1.05 }}
        ></motion.iframe>
      </StyledVideography>
    </Layout>
  )
}

export default Videography
