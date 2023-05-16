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
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo to="/">Your Logo</Logo>
      <div>
        <Link to="/hero">Hero</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;

