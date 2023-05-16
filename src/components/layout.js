import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Nav from './nav'

const LayoutContainer = styled.div`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`
const Heading = styled.header`
  color: rebeccapurple;
`

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`

const NavLinkItem = styled.li`
  padding-right: 2rem;
`

const StyledLink = styled(Link)`
  color: black;
`

const SiteTitle = styled.header`
  font-size: 3rem;
  color: gray;
  font-weight: 700;
  margin: 3rem 0;
`


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)


  return (
    <>
      <Nav />
      <LayoutContainer>
        <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
        <nav>
          <NavLinks>
            <NavLinkItem>
              <StyledLink to="/">
                Home
              </StyledLink>
            </NavLinkItem>
            <NavLinkItem>
              <StyledLink to="/about">
                About
              </StyledLink>
            </NavLinkItem>
            <NavLinkItem>
              <StyledLink to="/blog">
                Blog
              </StyledLink>
            </NavLinkItem>
          </NavLinks>
        </nav>
        <main>
          <Heading>{pageTitle}</Heading>
          {children}
        </main>
      </LayoutContainer>
    </>
  )
}

export default Layout