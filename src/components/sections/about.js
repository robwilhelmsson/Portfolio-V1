
import React from 'react'
import styled from 'styled-components'

const StyledAboutContainer = styled.section`
  max-width: 800px;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  height: auto;
  margin: auto;

  h1 {
    font-size: var(--fs-xxxl);
    font-weight: 300;
    color: var(--light);

    ::before {
      content: '————————';
      letter-spacing: -6px;
      color: var(--orange);
    }
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

`

const About = () => {
  return (
    <StyledAboutContainer>
      <h1 id='about'>&nbsp;&nbsp;About</h1>
      <p>Through a career of ski coaching, I have built an expert problem solving mindset that I have been able to use in an array of different situations and challenges. Having loved everything to do with computers, and building a PC with my father at a young age, I would now like to use these skills to pursue a path in software engineering. </p>
      <p>I have completed HTML, CSS and JavaScript courses on Udemy, and more recently completed a full stack software engineering course with <a href="https://generalassemb.ly/" target="blank">General Assembly</a>, learning JavaScript, Python, NodeJS, MongoDB, SQL and more.</p>
      <p>Working as part of a team is something I have always enjoyed, but am equally comfortable working individually and using my own initiative. I am looking forward to progressing my career in tech as a developer.
      </p>
    </StyledAboutContainer>
  )
}

export default About