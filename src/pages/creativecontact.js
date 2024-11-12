import React from "react"
import Layout from "../components/creativeLayout"
import styled from "styled-components"

const StyledContact = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;

  form {
    display: flex;
    flex-direction: column;
  }

  input,
  textarea {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #000;
  }

  button {
    align-self: flex-start;
    padding: 10px 20px;
    background: #000;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`

const Contact = () => (
  <Layout>
    <StyledContact>
      <h1>Contact Me</h1>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </StyledContact>
  </Layout>
)

export default Contact
