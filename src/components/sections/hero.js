import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  height: 100vh - var(--nav-height);
  margin-top: 100px;
  padding: 0 100px;

  h3 {
    color: var(--orange);
    font-family: var(--font-mono);
    font-size: var(--fs-md);
    font-weight: 300;
    margin: 0 0 30px 8px;
  }

  h1 {
    font-size: clamp(30px, 8vw, 65px);
    font-weight: 600;
    margin: 0 0 10px 0;
    color: var(--light);
  }

  h2 {
    font-size: clamp(30px, 8vw, 65px);
    font-weight: 600;
    margin: 0 0 0 0;
    color: var(--light-grey);
  }

  p {
    font-size: var(--fs-xl);
    font-weight: 200;
    margin: 25px 0px 0 0;
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


const Hero = () => {
  return (
    <>
        <Container id="content">
          <h3>Hi, my name is</h3>
          <h1>Rob Wilhelmsson.</h1>
          <h2>I'm a Web Developer based in London.</h2>
          <p>
            I'm a software engineer. I completed a full-stack software engineering
            bootcamp with <a href="https://generalassemb.ly/" target="blank">General Assembly</a>. I am now looking to put my skills to
            good use and gain some experience!
          </p>
        </Container>
    </>
  );
};

export default Hero;
