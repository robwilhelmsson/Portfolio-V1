import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as GatsbyLink } from "gatsby";
import Burger from "./burger";
import Menu from "./menu";
import useOnClickOutside from "../hooks/useOnClickOutside";

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-height);
  padding: 0 40px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex: 2;
`;

const Logo = styled(Link)`
  font-size: var(--fs-xxxl);
  font-weight: 300;
  color: var(--orange);
  text-decoration: none;
  cursor: pointer;
`;

const NavLinkContainer = styled.div`
  flex: 1.7;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light-grey);
  font-family: var(--font-mono);
  font-size: var(--fs-xxs);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.4s ease 0s;
  :hover {
    color: var(--orange);
    letter-spacing: 0.2px;
  }
  ::before {
    content: '———————';
    color: var(--orange);
    @media (max-width: 900px) {
      content: '—————';
    }
  }
  ::after {
    content: '———';
    color: var(--orange);
    @media (min-width: 1200px) {
      content: '———————';
    }
  }
`;

const ButtonLink = styled(GatsbyLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light-grey);
  font-family: var(--font-mono);
  font-size: var(--fs-xxs);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.4s ease 0s;
  border: 1px solid var(--orange);
  border-radius: 3px;
  width: 80px;
  height: 25px;
  color: var(--orange);
  :hover {
    background-color: var(--orange);
    color: var(--light);
  }
  ::before {
    content: '';
  }
  ::after {
    content: '';
  }
`

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setMenuOpen(false))

  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo to="/" spy={true} smooth={true} offset={0} duration={500}>R.W.</Logo>
      </LogoContainer>
      <div ref={node}>
        <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <NavLinkContainer>
        <NavLink to="about" spy={true} smooth={true} offset={-50} duration={700}>&nbsp;About&nbsp;</NavLink>
        <NavLink to="skills" spy={true} smooth={true} offset={-50} duration={700}>&nbsp;Skills&nbsp;</NavLink>
        <NavLink to="projects" spy={true} smooth={true} offset={-50} duration={700}>&nbsp;Projects&nbsp;</NavLink>
        <NavLink to="contact" spy={true} smooth={true} offset={-50} duration={700}>&nbsp;Contact&nbsp;</NavLink>
        <ButtonLink to="/cv">CV</ButtonLink>
      </NavLinkContainer>
    </NavbarContainer>
  );
};

export default Nav;
