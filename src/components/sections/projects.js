
import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'


const StyledProjectContainer = styled.section`
  max-width: 800px;
  padding-bottom: 100px;
  margin: auto;

  h1 {
    font-size: var(--fs-xxxl);
    font-weight: 300;
    color: var(--light);
    margin-bottom: 40px;

    ::before {
      content: '————————';
      font-weight: 200;
      letter-spacing: -6px;
      color: var(--orange);
    }
  }
`
const StyledProjectsAll = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledProject = styled.div`
  display: flex;
  padding-bottom: 10px;
`

const StyledProjectDescription = styled.div`
  color: var(--light-grey);
  display: flex;
  flex-direction: column;
  flex: 1;
`

const StyledProjectImage = styled.div`
  display: flex;
  flex: 1;
`

const Projects = () => {
  return (
    <StyledProjectContainer>
      <h1 id='projects'>&nbsp;&nbsp;Projects</h1>

      <StyledProjectsAll>

        <StyledProject>
          <StyledProjectImage>
            <StaticImage src='../../images/testimage.jpg' alt='test' width={300} />
          </StyledProjectImage>
          <StyledProjectDescription>
            <h3>Project 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </StyledProjectDescription>
        </StyledProject>

        <StyledProject>
          <StyledProjectDescription>
            <h3>Project 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </StyledProjectDescription>
          <StyledProjectImage>
            <StaticImage src='../../images/testimage.jpg' alt='test' width={300} />
          </StyledProjectImage>
        </StyledProject>

        <StyledProject>
          <StyledProjectImage>
            <StaticImage src='../../images/testimage.jpg' alt='test' width={300} />
          </StyledProjectImage>
          <StyledProjectDescription>
            <h3>Project 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </StyledProjectDescription>
        </StyledProject>

        <StyledProject>
          <StyledProjectDescription>
            <h3>Project 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </StyledProjectDescription>
          <StyledProjectImage>
            <StaticImage src='../../images/testimage.jpg' alt='test' width={300} />
          </StyledProjectImage>
        </StyledProject>

      </StyledProjectsAll>

    </StyledProjectContainer>

  )
}

export default Projects