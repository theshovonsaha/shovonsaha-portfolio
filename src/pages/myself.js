import React from "react"
import Layout from "../components/creativeLayout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { motion } from "framer-motion"
import SEO from "../components/seo"

const StyledMyself = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #f6f6f6 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(245, 245, 245, 0.8) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    transform: rotate(-45deg);
    z-index: 0;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 6rem 2rem;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
    position: relative;
    z-index: 1;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      text-align: center;
      padding: 4rem 1.5rem;
    }
  }

  .image-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .profile-container {
    position: relative;
    margin-bottom: 3rem;

    &::before {
      content: "";
      position: absolute;
      top: -15px;
      left: -15px;
      right: 15px;
      bottom: 15px;
      border: 1px solid #000;
      z-index: 0;
      transition: all 0.3s ease;
    }

    &:hover::before {
      transform: translate(5px, 5px);
    }
  }

  .profile-image {
    width: 400px;
    height: 500px;
    position: relative;
    z-index: 1;
    box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.1),
      -20px -20px 60px rgba(255, 255, 255, 0.8);
    overflow: hidden;

    @media (max-width: 1024px) {
      width: 300px;
      height: 400px;
    }

    @media (max-width: 480px) {
      width: 250px;
      height: 350px;
    }

    img {
      transition: transform 0.6s ease !important;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;

    h1 {
      font-size: 3rem;
      font-weight: 200;
      margin-bottom: 2rem;
      letter-spacing: 0.2em;
      color: #000;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 60px;
        height: 1px;
        background: #000;

        @media (max-width: 1024px) {
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }

    .text-content {
      font-size: 1.1rem;
      line-height: 2;
      color: #333;
      margin-bottom: 2rem;

      p {
        margin-bottom: 1.5rem;
        position: relative;
        padding-left: 1rem;

        @media (max-width: 1024px) {
          padding-left: 0;
        }

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 12px;
          width: 3px;
          height: 3px;
          background: #000;
          border-radius: 50%;

          @media (max-width: 1024px) {
            display: none;
          }
        }
      }
    }

    .contact-link {
      align-self: flex-start;
      margin-top: 2rem;
      padding: 1rem 2rem;
      border: 1px solid #000;
      color: #000;
      text-decoration: none;
      letter-spacing: 0.1em;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;

      @media (max-width: 1024px) {
        align-self: center;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: #000;
        transition: transform 0.4s ease;
        z-index: -1;
      }

      &:hover {
        color: #fff;

        &::before {
          transform: translateX(100%);
        }
      }
    }
  }

  .signature {
    font-family: "Playfair Display", serif;
    font-style: italic;
    font-size: 1.5rem;
    margin-top: 2rem;
    opacity: 0.8;
  }
`

const myself = () => {
  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "images/me/jump.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <Layout>
      <SEO
        title="About Me - Shovon Saha | Visual Storyteller"
        description="Step into my world of visual storytelling. As a Toronto-based artist, I capture life's precious moments with passion and creativity."
      />
      <StyledMyself>
        <motion.div
          className="container"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="image-section" variants={itemVariants}>
            <div className="profile-container">
              <div className="profile-image">
                <Img
                  fluid={data.me.childImageSharp.fluid}
                  alt="Shovon Saha - Visual Storyteller"
                  imgStyle={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div className="content" variants={itemVariants}>
            <h1>VISUAL STORYTELLER</h1>
            <div className="text-content">
              <p>
                Through the lens of my camera, I seek to capture the essence of
                fleeting moments—those raw, unscripted instances that tell our
                most authentic stories. My passion lies in transforming ordinary
                scenes into extraordinary memories.
              </p>
              <p>
                Every frame I capture is a testament to the beauty of human
                connection. Whether it&apos;s the tender embrace of newlyweds,
                the infectious laughter of family gatherings, or the quiet
                determination in a portrait, I strive to preserve these precious
                moments with artistry and emotion.
              </p>
              <p>
                My journey as a visual storyteller has taught me that the most
                powerful images are born from genuine connections and shared
                experiences. I approach each project with an open heart, ready
                to discover and document the unique narrative that unfolds
                before my lens.
              </p>
            </div>
            <Link to="/creativecontact" className="contact-link">
              LET&apos;S CREATE TOGETHER
            </Link>
            <div className="signature">- Shovon Saha</div>
          </motion.div>
        </motion.div>
      </StyledMyself>
    </Layout>
  )
}

export default myself
