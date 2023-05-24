
import React from 'react'
import styled from 'styled-components'


const StyledFooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  a {
    text-decoration: none;
    line-height: 10px;
  }

  div {
    :hover p {
        color: var(--orange);
        letter-spacing: 0.1px;
      }
  }

  p {
    font-family: var(--font-mono);
    font-size: var(--fs-xxxs);
    color: var(--light-grey);
    transition: all 0.4s ease 0s;
  }


`

const Footer = () => {
  return (
    <StyledFooterContainer>
      <a href='https://github.com/robwilhelmsson/portfolio-v1' target='_blank' rel="noreferrer">
        <div>
          <p>Designed and built by Rob Wilhelmsson, inspired by some of the best.</p>
          <p>Link to GitHub repository</p>
        </div>
      </a>
    </StyledFooterContainer>
  )
}

export default Footer