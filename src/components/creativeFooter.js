import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"

const StyledFooter = styled.footer`
  flex-shrink: 0;
  padding: 3rem 1rem;
  background-color: white;
  text-align: center;

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .copyright {
    color: #666;
    font-size: 0.9rem;
    letter-spacing: 0.05em;
    margin: 0;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 1.5rem;
  }

  .social-link {
    color: #666;
    text-decoration: none;
    font-size: 0.9rem;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;

    &:hover {
      color: #000;
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    .social-links {
      gap: 1.5rem;
      margin-top: 1rem;
    }
  }
`

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const CreativeFooter = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <StyledFooter>
      <motion.div
        className="footer-content"
        initial="hidden"
        animate="visible"
        variants={footerVariants}
      >
        <p className="copyright">
          © {new Date().getFullYear()} {data.site.siteMetadata.author}. All
          rights reserved.
        </p>
        <div className="social-links">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
          <a href="mailto:contact@example.com" className="social-link">
            Email
          </a>
        </div>
      </motion.div>
    </StyledFooter>
  )
}

export default CreativeFooter
