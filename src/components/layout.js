
import * as React from 'react'
import Nav from './nav'
import Hero from './sections/hero'
import Socialside from './socialside'
import EmailSide from './emailside'
import styled from 'styled-components'
import GlobalStyle from '../styles/globalStyles'

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
`

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <StyledMain>
        <Socialside />
        <Hero />
        <EmailSide />
      </StyledMain>
    </>
  )
}

export default Layout