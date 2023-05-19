import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-height);
`;

const Logo = styled(Link)`
  /* background-color: blue; */
  flex: 2;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--orange);
  text-decoration: none;
  margin-left: 40px;
`;

const NavLinkContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-right: 40px;
`;

const NavLink = styled(Link)`
  color: var(--orange);
  text-decoration: none;
`;

const Nav = () => {
  return (
    <NavbarContainer>
      <Logo to="/">Logo</Logo>
      <NavLinkContainer>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/">CV</NavLink>
      </NavLinkContainer>
    </NavbarContainer>
  );
};

export default Nav;
