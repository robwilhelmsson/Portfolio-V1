import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
`

const Hero = () => {
  return (
    <>
      <Container>
        <h1>Rob Wilhelmsson</h1>
        <h2>Software Engineer</h2>
        <p>My passion for software engineering has come from the combination of my technical engineering background and my desire to have a creative outlet. I found that this field allowed me to practise both of these attributes in a way that one cannot work without the other which has led me to exploring deeper into the world of software engineering.
        </p>
        <StaticImage
          src='../../images/balloons.jpg'
          alt='balloons'
        />
      </Container >
    </>

  )
}

export default Hero