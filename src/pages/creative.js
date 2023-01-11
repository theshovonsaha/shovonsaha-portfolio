import React from "react"
import Layout from "../components/creativeLayout"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
const StyledCreative = styled.p`
  .grid {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    grid-gap: 1rem;
  }
  img {
    border-radius: 2%;
  }
  div {
    align-items: center;
  }

  .street {
    opacity: 0.9;
    transition: opacity 0.5s ease;
  }
  .street:hover {
    opacity: 1;
  }
  .street::after {
    content: "Abstract";
    color: white;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    border-radius: 1%;
    transition: opacity 0.5s ease;
  }
  .street:hover::after {
    opacity: 0;
  }
  .people {
    opacity: 0.9;
    transition: opacity 0.5s ease;
  }
  .people:hover {
    opacity: 1;
  }
  .people::after {
    content: "People";
    color: white;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    border-radius: 1%;
    transition: opacity 0.5s ease;
  }

  .people:hover::after {
    opacity: 0;
  }
  .cars {
    opacity: 0.9;
    transition: opacity 0.5s ease;
  }
  .cars:hover {
    opacity: 1;
  }
  .cars::after {
    content: "Motor";
    color: white;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    border-radius: 1%;
    transition: opacity 0.5s ease;
  }

  .cars:hover::after {
    opacity: 0;
  }
  .nature {
    opacity: 0.9;
    transition: opacity 0.5s ease;
    padding: 1vh;
  }
  .nature:hover {
    opacity: 1;
  }
  .nature::after {
    content: "Nature";
    color: white;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    border-radius: 1%;
    transition: opacity 0.5s ease;
  }

  .nature:hover::after {
    opacity: 0;
  }
`
const creative = () => {
  const data = useStaticQuery(graphql`
    query {
      people: file(relativePath: { eq: "images/People/MariyaBest.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 370, height: 370) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      street: file(relativePath: { eq: "images/Abstract/blueClockVNC.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 370, height: 370) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      nature: file(relativePath: { eq: "images/Nature/SnowMountains.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 370, height: 370) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cars: file(relativePath: { eq: "images/Car/Barbataus.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 370, height: 370) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <StyledCreative>
      <Layout>
        <div className="grid">
          <div>
            <Link to="/people">
              <Img
                className="people"
                fixed={data.people.childImageSharp.fixed}
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link to="/street">
              <Img
                className="street"
                fixed={data.street.childImageSharp.fixed}
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link to="/nature">
              <Img
                className="nature"
                fixed={data.nature.childImageSharp.fixed}
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link to="/motor">
              <Img
                className="cars"
                fixed={data.cars.childImageSharp.fixed}
                alt=""
              />
            </Link>
          </div>
        </div>
      </Layout>
    </StyledCreative>
  )
}

export default creative
