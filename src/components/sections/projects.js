
import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'


const StyledProjectContainer = styled.section`
  max-width: 1000px;
  padding-bottom: 150px;
  margin: auto;

  h1 {
    font-size: var(--fs-xxxl);
    font-weight: 300;
    color: var(--light);
    margin-bottom: 40px;

    ::before {
      content: '————————';
      font-weight: 100;
      letter-spacing: -6px;
      color: var(--orange);
    }
  }
  h3 {
    font-size: var(--fs-xxl);
    font-weight: 400;
    @media (max-width: 600px) {
      font-size: var(--fs-lg);
    }
  }

  h4 {
    font-size: var(--fs-md);
    font-weight: 300;
    @media (max-width: 400px) {
      font-size: var(--fs-sm);
    }
  }

  h5 {
    font-family: var(--font-mono);
    font-weight: 400;
    @media (max-width: 600px) {
      font-size: var(--fs-xxxs);
    }
  }
  a {
    color: var(--orange);
    text-decoration: none;
  }
`
const StyledProjectsAll = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledProject = styled.div`
  display: flex;
  position: relative;
  margin: 20px 0;
  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
  }
`

const StyledProjectTextContainer = styled.div`
  color: var(--light-grey);
  display: flex;
  flex-direction: column;
  min-height: 300px;
  flex: 1;
  @media (max-width: 800px) {
    position: absolute;
    align-items: center;
    text-align: center;
    width: 100%;
    min-height: 100%;
  }
  @media (max-width: 600px) {
    background-color: var(--green);
    height: fit-content;
    display: flex;

  }
`

const StyledProjectImage = styled.div`
  display: flex;
  position: relative;
  flex: 1.3;
  transition: filter 0.3s ease;
  border-radius: 3px;
  box-shadow: 0px -1px 18px 6px rgba(0,0,0,0.35);
  &:hover {
    filter: blur(4px);
  }
  cursor: pointer;
  @media (max-width: 800px) {
    filter: blur(4px);
    opacity: 0.5;
    width: 300px;
  }
  @media (max-width: 600px) {
    min-height: 270px;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:hover::after {
    opacity: 1;
  }
`

const StyledProjectTitle = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  @media (max-width: 800px) {
    margin-top: 0;
    align-items: flex-start;
    justify-content: flex-start;
    top: 0;
    color: var(--light);
  }

`

const StyledProjectDescription = styled.div`
  display: flex;
  position: absolute;
  flex: 1;
  background-color: var(--green);
  padding: 0 30px;
  text-align: right;
  border-radius: 3px;
  box-shadow: 0px -1px 18px 6px rgba(0,0,0,0.25);
  top: 25%;
  right: 0;
  bottom: 0;
  z-index: 1;
  max-width: 600px;
  max-height: fit-content;
  cursor: pointer;
  @media (max-width: 800px) {
    justify-content: center;
    text-align: center;
    top: 20%;
    padding: 0;
  }
  @media (max-width: 600px) {
    box-shadow: none;
    background-color: none;
  }
`

const StyledProjectTech = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
  padding-left: 10px;
  @media (max-width: 800px) {
    color: var(--light);
    padding: 0;
  }
`

const StyledGithubLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 20px;
  p {
    font-family: var(--font-mono);
    font-size: var(--fs-md);
    color: var(--light-grey);
    transition: all 0.4s ease 0s;
    cursor: pointer;
    :hover {
        color: var(--orange);
        letter-spacing: 0.1px;
      }
  }
`

const Projects = () => {
  return (
    <StyledProjectContainer>
      <h1 id='projects'>&nbsp;&nbsp;Projects</h1>

      <StyledProjectsAll>

        <StyledProject>
          <StyledProjectImage onClick={() => window.open('https://resort-info-app.netlify.app/')}>
            <StaticImage src='../../images/resort-info-img.png' alt='resort-info-img' />
          </StyledProjectImage>
          <StyledProjectTextContainer>
            <StyledProjectTitle>
              <h3>Resort Info App</h3>
            </StyledProjectTitle>
            <StyledProjectDescription onClick={() => window.open('https://resort-info-app.netlify.app/')}>
              <h4>A full-stack application using a Python & Flask backend and React Gatsby frontend. The app gives you information on all the ski resorts in the world. Ability to create an account to save favourite resorts to your profile. The app was created to get more familiar with full stack applications using the technologies below.</h4>
            </StyledProjectDescription>
            <StyledProjectTech>
              <h5>React - Python - Flask - PostgreSQL - JWT - Chakra UI</h5>
            </StyledProjectTech>
          </StyledProjectTextContainer>
        </StyledProject>

        <StyledProject>
          <StyledProjectImage onClick={() => window.open('https://thorts.netlify.app/')}>
            <StaticImage src='../../images/thorts-img.png' alt='thorts-img' />
          </StyledProjectImage>
          <StyledProjectTextContainer>
            <StyledProjectTitle>
              <h3>Thorts</h3>
            </StyledProjectTitle>
            <StyledProjectDescription onClick={() => window.open('https://thorts.netlify.app/')}>
              <h4>A simple app for finding inspirational quotes from a quotes API. You can sign up or sign in using a backend program, but currently the ability to add quotes is not available. Built as our final project on the General Assembly Software Engineering course.</h4>
            </StyledProjectDescription>
            <StyledProjectTech>
              <h5>Python - Flask - React - TypeScript - Material UI</h5>
            </StyledProjectTech>
          </StyledProjectTextContainer>
        </StyledProject>

        <StyledProject>
          <StyledProjectImage onClick={() => window.open('https://rapidapi.com/robwilhelmsson/api/ski-resort-api/')}>
            <StaticImage src='../../images/ski-api-img.png' alt='ski-api-img' />
          </StyledProjectImage>
          <StyledProjectTextContainer>
            <StyledProjectTitle>
              <h3>Ski Resort API</h3>
            </StyledProjectTitle>
            <StyledProjectDescription onClick={() => window.open('https://rapidapi.com/robwilhelmsson/api/ski-resort-api/')}>
              <h4>A RESTful api to get detailed information on any resort in the world. Built as I couldn’t find one that exists at the moment, and as a base for the Resorts Info Project. I was interested how to build an api so it was a great way to practice using Axios, Express and Cheerio to scrape data from the web.</h4>
            </StyledProjectDescription>
            <StyledProjectTech>
              <h5>React - Axios - Express - Cheerio - REST API</h5>
            </StyledProjectTech>
          </StyledProjectTextContainer>
        </StyledProject>

        <StyledProject>
          <StyledProjectImage onClick={() => window.open('https://project-kleur.netlify.app/')}>
            <StaticImage src='../../images/kleur-img.png' alt='kleur-img' />
          </StyledProjectImage>
          <StyledProjectTextContainer>
            <StyledProjectTitle>
              <h3>Kleur</h3>
            </StyledProjectTitle>
            <StyledProjectDescription onClick={() => window.open('https://project-kleur.netlify.app/')}>
              <h4>A group project on the General Assembly course using the MERN stack. The app is a fake marketplace to buy colours called Kleur. We tried to implement a store front, products page and basket using logic to connect the frontend and backend programs.</h4>
            </StyledProjectDescription>
            <StyledProjectTech>
              <h5>MERN Stack - TypeScript - Jira - Material UI - Netlify</h5>
            </StyledProjectTech>
          </StyledProjectTextContainer>
        </StyledProject>

        <StyledProject>
          <StyledProjectImage onClick={() => window.open('https://robsflaggame.netlify.app/')}>
            <StaticImage src='../../images/flag-game-img.png' alt='flag-game-img' />
          </StyledProjectImage>
          <StyledProjectTextContainer>
            <StyledProjectTitle>
              <h3>Flag Game</h3>
            </StyledProjectTitle>
            <StyledProjectDescription onClick={() => window.open('https://robsflaggame.netlify.app/')}>
              <h4>A flag guessing game using an external API for the countries data. Choose by region or go for the whole world and see how many flags you can guess right.</h4>
            </StyledProjectDescription>
            <StyledProjectTech>
              <h5>React - Vite - CSS - TypeScript</h5>
            </StyledProjectTech>
          </StyledProjectTextContainer>
        </StyledProject>

        <StyledProject>
          <StyledProjectImage onClick={() => window.open('https://pixelhill.netlify.app/')}>
            <StaticImage src='../../images/pixel-hill-img.png' alt='pixel-hill-img' />
          </StyledProjectImage>
          <StyledProjectTextContainer>
            <StyledProjectTitle>
              <h3>Pixel Hill</h3>
            </StyledProjectTitle>
            <StyledProjectDescription onClick={() => window.open('https://pixelhill.netlify.app/')}>
              <h4>A project to build a game, using only HTML, CSS and JS. Welcome to pixel hill. A platformer game to get a little cube to the end of the game. Collecting coins and dodging lava along the way.</h4>
            </StyledProjectDescription>
            <StyledProjectTech>
              <h5>HTML - CSS - JavaScript - Excalidraw</h5>
            </StyledProjectTech>
          </StyledProjectTextContainer>
        </StyledProject>

      </StyledProjectsAll>
      <StyledGithubLink>
        <a href='https://github.com/robwilhelmsson'>
          <p>Check out all the projects on GitHub</p>
        </a>

      </StyledGithubLink>

    </StyledProjectContainer>

  )
}

export default Projects