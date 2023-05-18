import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  max-width: 800px;
  height: 100vh - 100px;
  /* font-family: "Open Sans"; */
  h3 {
    color: var(--red);
    font-family: "Fira Code";
    font-size: 20px;
    font-weight: 200;
  }
  h1 {

  }
`


const Hero = () => {
  return (
    <>
      <Container>
        <h3>Hi, my name is</h3>
        <h1>Rob Wilhelmsson</h1>
        <h2>I enjoy building things for the web.</h2>
        <p>I'm a software engineer. I completed a full-stack software engineering bootcamp with General Assembly. I am now looking to put my skills to good use and gain some experience!</p>
      </Container >
    </>

  )
}

export default Hero