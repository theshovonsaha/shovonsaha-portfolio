import React from "react"
import Layout from "../components/creativeLayout"
import styled from "styled-components"
const Styledc = styled.p`
div {
    display: grid;
    justify-content: space-around;
    padding: 2vh;
    }
iframe {
    width: 420px;
    height: 280px;
    padding: 1vh;
    }
@media screen and(max-width: 768px){
    width: 420px;
    height: 280px;  
    }
`
const videography = () => {
    return (
        <Layout>
            <Styledc>
                <div>
                    <iframe width="680" height="420" src="https://www.youtube.com/embed/GmgZxyuW_kc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="680" height="420" src="https://www.youtube.com/embed/eFPLmUfnG3g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="680" height="420" src="https://www.youtube.com/embed/y2zhEHwYRNE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        
                    <iframe width="680" height="420" src="https://www.youtube.com/embed/HD-94oldIQY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </Styledc>
        </Layout> 
    )
}

export default videography 