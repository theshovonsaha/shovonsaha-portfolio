import React from "react"
import Layout from "../components/creativeLayout"
import styled from "styled-components"

const Styledc = styled.div`
  .container {
    display: grid;
  }
  a {
    text-decoration: none;
    color: grey;
  }
  p {
    justify-content: center;
    padding: 100px;
  }
  a:hover {
    color: black;
  }
  img {
    height: 40px;
    width: 40px;
  }
`
const creativecontact = () => {
  return (
    <Layout>
      <Styledc>
        <div className="container">
          <a href={`mailto:"theshovonsaha@gmail.com"`}>
            Email: theshovonsaha@gmail.com
          </a>
        </div>
      </Styledc>
    </Layout>
  )
}

export default creativecontact
