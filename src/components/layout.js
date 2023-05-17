
import * as React from 'react'
import Nav from './nav'
import Hero from './sections/hero'
import Socialside from './socialside'
import EmailSide from './emailSide'
import styled from 'styled-components'

const StyledMain = styled.main`
  display: flex;
`

const Layout = () => {
  return (
    <>
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