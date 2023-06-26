import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const StyledHeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  height: calc(100vh - var(--nav-height) - 100px);
  padding-top: 100px;
  margin: auto;
  @media (max-width: 900px) {
    height: calc(100vh - var(--nav-height) - 40px);
    padding-top: 60px;
  }
  h3 {
    color: var(--orange);
    font-family: var(--font-mono);
    font-size: var(--fs-md);
    font-weight: 300;
    margin: 0 0 30px 5px;
  }
  h1 {
    color: var(--light);
  }
  h2 {
    color: var(--light-grey);
  }
  p {
    font-size: var(--fs-xl);
    font-weight: 200;
    margin: 20px 0 0 5px;
    color: var(--light-grey);
  }
  p a {
    font-size: var(--fs-xl);
    font-weight: 200;
    margin: 25px 0px 0 0;
    color: var(--orange);
    text-decoration: none;
    :hover {
      text-decoration: underline;
      text-decoration-thickness: 1px;
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 45px;
  margin: 20px 0 0 7px;
  color: var(--orange);
  border: 1px solid var(--orange);
  border-radius: 2px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  :hover {
    box-shadow: inset 0 0 0px 1px var(--orange);
    letter-spacing: 0.5px;
  }
  span {
    font-family: var(--font-mono);
    font-size: var(--fs-sm);
  }
`

const Hero = () => {
  return (
    <>
      <StyledHeroContainer id="hero">
        <h3>Hi, my name is</h3>
        <h1 className="large-heading">Rob Wilhelmsson.</h1>
        <h2 className="large-heading">I&apos;m a Web Developer based in London.</h2>
        <p>
          I&apos;m a software engineer. I completed a full-stack software engineering
          bootcamp with <a href="https://generalassemb.ly/" target="blank">General Assembly</a>. I am now looking to put my skills to
          good use and gain some experience.
        </p>
        <StyledLink to="projects" spy={true} smooth={true} offset={-50} duration={700}>
          <span>Projects</span>
        </StyledLink>
      </StyledHeroContainer>
    </>
  );
};

export default Hero;
