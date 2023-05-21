
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledFooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    font-family: var(--font-mono);
    font-size: var(--fs-xxxs);
    color: var(--light-grey);
  }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    line-height: 10px;
    :hover {
      p {
        color: var(--orange);
      }
    }
`

const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledLink to='https://github.com/robwilhelmsson/portfolio-v1' target='_blank'>
        <p>Designed and built by Rob Wilhelmsson, inspired by some of the best.</p>
        <p>Link to GitHub repository</p>
      </StyledLink>
    </StyledFooterContainer>
  )
}

export default Footer