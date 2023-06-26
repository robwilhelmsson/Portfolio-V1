import React from 'react'
import styled from 'styled-components'
import CvImage from '../images/rob-wilhelmsson-cv.png'

const StyledImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #CCCCCC;
`

const StyledImage = styled.img`
  padding: 20px;
  max-width: 60%;
  height: auto;
  @media (max-width: 900px) {
    max-width: 100%;
    padding: 0;
  }
`

const Cv = () => {
  return (
    <StyledImageContainer>
      <StyledImage src={CvImage} alt='rob wilhelmsson cv' />
    </StyledImageContainer>
  )

}

export default Cv