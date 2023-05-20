import React from "react";
import styled from "styled-components";

const StyledHeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  height: calc(100vh - var(--nav-height) - 100px);
  padding-top: 100px;
  margin: auto;

  h3 {
    color: var(--orange);
    font-family: var(--font-mono);
    font-size: var(--fs-md);
    font-weight: 300;
    margin: 0 0 30px 8px;
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
    margin: 20px 0 0 3px;
    color: var(--light-grey);
  }

  a {
    font-size: var(--fs-xl);
    font-weight: 200;
    margin: 25px 0px 0 0;
    color: var(--orange);
    text-decoration: none;
  }
`;

const StyledButton = styled.button`
  font-family: var(--font-mono);
  font-size: var(--fs-sm);
  width: 150px;
  height: 45px;
  background: none;
  color: var(--orange);
  margin: 25px 0 0 3px;
  border: 1px solid var(--orange);
  border-radius: 2px;
`


const Hero = () => {
  return (
    <>
        <StyledHeroContainer id="hero">
          <h3>Hi, my name is</h3>
          <h1 className="large-heading">Rob Wilhelmsson.</h1>
          <h2 className="large-heading">I'm a Web Developer based in London.</h2>
          <p>
            I'm a software engineer. I completed a full-stack software engineering
            bootcamp with <a href="https://generalassemb.ly/" target="blank">General Assembly</a>. I am now looking to put my skills to
            good use and gain some experience!
          </p>
          <StyledButton>Projects</StyledButton>
        </StyledHeroContainer>
    </>
  );
};

export default Hero;
