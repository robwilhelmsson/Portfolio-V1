import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 900px;
  height: 100vh - var(--nav-height);
  margin-top: 100px;
  padding: 0 100px;

  h3 {
    color: var(--red);
    font-family: var(--font-mono);
    font-size: var(--fs-lg);
    font-weight: 300;
    margin: 0 0 40px 8px;
  }

  h1 {
    font-size: clamp(30px, 8vw, 65px);
    font-weight: 700;
    margin: 0 0 10px 0;
    color: var(--light);
  }

  h2 {
    font-size: clamp(30px, 8vw, 65px);
    font-weight: 700;
    margin: 0 0 0 0;
    color: var(--light-grey);
  }

  p {
    /* font-family: var(--font-serif); */
    font-size: var(--fs-xxl);
    font-weight: 200;
    margin: 40px 0px 0 0;
    color: var(--light-grey);
  }
`;


const Hero = () => {
  return (
    <>
      <Container>
        <h3>Hi, my name is</h3>
        <h1>Rob Wilhelmsson</h1>
        <h2>I enjoy building things for the web.</h2>
        <p>
          I'm a software engineer. I completed a full-stack software engineering
          bootcamp with General Assembly. I am now looking to put my skills to
          good use and gain some experience!
        </p>
      </Container>
    </>
  );
};

export default Hero;
