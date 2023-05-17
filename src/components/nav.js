import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f1f1f1;
`;

const Logo = styled(Link)`
  /* background-color: blue; */
  flex: 2;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const NavLinkContainer = styled.div`
  flex: 1.7;
  display: flex;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  /* color: red; */
`;

const Nav = () => {
  return (
    <NavbarContainer>
      <Logo to="/">Your Logo</Logo>
      <NavLinkContainer>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to='/'>CV</NavLink>
      </NavLinkContainer>
    </NavbarContainer>
  );
};

export default Nav;

