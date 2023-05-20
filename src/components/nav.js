import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-height);
`;

const LogoContainer = styled.div`
  display: flex;
  flex: 2;
  margin-left: 40px;
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
  margin-right: 40px;
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
  /* margin-right: 5px; */
  ::before {
    content: '——————————';
    color: var(--orange);
  }
  ::after {
    content: '——';
    color: var(--orange);
  }
`;

const ButtonLink = styled(NavLink)`
  border: 1px solid var(--orange);
  border-radius: 3px;
  width: 80px;
  height: 25px;
  color: var(--orange);

  ::before {
    content: '';
  }
  ::after {
    content: '';
  }
`

const Nav = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo to="/" spy={true} smooth={true} offset={0} duration={500}>R.W.</Logo>
      </LogoContainer>
      <NavLinkContainer>
        <NavLink to="about" spy={true} smooth={true} offset={-50} duration={700}>&nbsp;About&nbsp;</NavLink>
        <NavLink to="skills" spy={true} smooth={true} offset={-50} duration={700}>&nbsp;Skills&nbsp;</NavLink>
        <NavLink to="projects" spy={true} smooth={true} offset={-50} duration={700}>&nbsp;Projects&nbsp;</NavLink>
        <NavLink to="contact" spy={true} smooth={true} offset={-50} duration={700}>&nbsp;Contact&nbsp;</NavLink>
        <ButtonLink to="/">CV</ButtonLink>
      </NavLinkContainer>
    </NavbarContainer>
  );
};

export default Nav;
