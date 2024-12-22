import React, { useState } from "react"
import Layout from "../components/creativeLayout"
import styled from "styled-components"
import { motion } from "framer-motion"
import SEO from "../components/seo"

const StyledContact = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
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

  .contact-container {
    position: relative;
    z-index: 1;
    max-width: 800px;
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    padding: 3rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.05),
      -20px -20px 60px rgba(255, 255, 255, 0.8);

    @media (max-width: 768px) {
      padding: 2rem;
    }
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
    letter-spacing: 0.2em;
    text-align: center;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 1px;
      background: #000;
    }
  }

  .description {
    text-align: center;
    margin-bottom: 3rem;
    line-height: 1.8;
    color: #555;
    font-size: 1.1rem;
  }

  form {
    display: grid;
    gap: 2rem;
  }

  .form-group {
    position: relative;

    label {
      position: absolute;
      left: 1rem;
      top: 1rem;
      font-size: 0.9rem;
      color: #666;
      transition: all 0.3s ease;
      pointer-events: none;
      letter-spacing: 0.05em;
    }

    input:focus ~ label,
    textarea:focus ~ label,
    input:not(:placeholder-shown) ~ label,
    textarea:not(:placeholder-shown) ~ label {
      top: -1.5rem;
      left: 0;
      color: #000;
      font-size: 0.8rem;
    }
  }

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid #ddd;
    background: transparent;
    font-size: 1rem;
    transition: all 0.3s ease;
    color: #333;

    &::placeholder {
      color: transparent;
    }

    &:focus {
      outline: none;
      border-color: #000;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }

  button {
    justify-self: center;
    padding: 1rem 3rem;
    background: transparent;
    border: 1px solid #000;
    color: #000;
    font-size: 1rem;
    letter-spacing: 0.2em;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

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

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  .success-message {
    text-align: center;
    color: #4caf50;
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  .error-message {
    text-align: center;
    color: #f44336;
    margin-top: 1rem;
    font-size: 0.9rem;
  }
`

const Contact = () => {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleSubmit = async e => {
    e.preventDefault()
    setFormStatus({ ...formStatus, submitted: true })

    try {
      const form = e.target
      const data = new FormData(form)

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      })

      if (response.ok) {
        setFormStatus({
          submitted: false,
          success: true,
          message: "Thank you for reaching out! I'll get back to you soon.",
        })
        form.reset()
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Form Error:", error)
      setFormStatus({
        submitted: false,
        success: false,
        message: "Something went wrong. Please try again or email me directly.",
      })
    }
  }

  return (
    <Layout>
      <SEO
        title="Contact - Shovon Saha | Visual Storyteller"
        description="Get in touch to discuss your next creative project. Let's create something extraordinary together."
      />
      <StyledContact>
        <motion.div
          className="contact-container"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          <h1>LET&apos;S CONNECT</h1>
          <p className="description">
            Ready to create something extraordinary? Whether you have a specific
            project in mind or just want to explore possibilities, I&apos;m here
            to help bring your vision to life.
          </p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            netlify
          >
            {/* Hidden input for Netlify Forms */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot field to prevent spam */}
            <p hidden>
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <label htmlFor="message">Tell me about your project</label>
            </div>
            <button type="submit" disabled={formStatus.submitted}>
              {formStatus.submitted ? "SENDING..." : "SEND MESSAGE"}
            </button>
            {formStatus.message && (
              <div
                className={
                  formStatus.success ? "success-message" : "error-message"
                }
              >
                {formStatus.message}
              </div>
            )}
          </form>
        </motion.div>
      </StyledContact>
    </Layout>
  )
}

export default Contact
