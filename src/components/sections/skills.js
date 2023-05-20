
import React from 'react'
import styled from 'styled-components'

const StyledSkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding-bottom: 100px;
  height: auto;
  margin: auto;

  h1 {
    display: flex;
    justify-content: flex-end;
    font-size: var(--fs-xxxl);
    font-weight: 300;
    color: var(--light);
    margin-right: 5px;

    ::after {
      content: '————————';
      letter-spacing: -6px;
      color: var(--orange);
    }
  }
`

const StyledContentContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
;`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 140px;
  padding-left: 15px;
  background-color: var(--green);
  border-radius: 3px;
  box-shadow: 0px 7px 10px -8px rgba(0,0,0,0.6);
  :hover {
    transform: translateY(-5px) ;
    transition: transform 300ms;
  }


  h3 {
    color: var(--light);
    font-size: var(--fs-lg);
    font-weight: 500;
    ::after {
      content: '.';
      color: var(--orange);
    }
  }

  ul {
    font-family: var(--font-mono);
    font-size: var(--fs-xxs);
    color: var(--light-grey);
    list-style: none;
    padding: 0;
  }

  li {
    line-height: 25px;
  }
`;

const frontendContent = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'MaterialUI', 'Bulma', 'Styled Components', 'TailwindCSS']
const backendContent = ['Python', 'MongoDB', 'Mongoose', 'Express', 'Node.js', 'Flask', 'SQLAlchemy', 'Postgres']
const projectManagementContent = ['Github', 'Jira']
const designContent = ['Illustrator', 'Photoshop', 'Figma']


const Skills = () => {
  return (
    <>
      <StyledSkillsContainer>
        <div>
          <h1 id='skills'>Skills&nbsp;</h1>
        </div>
        <StyledContentContainer>
          <StyledContent>
            <h3>Frontend&nbsp;</h3>
            <ul>
              {frontendContent.map((content) => (
                <li>{content}</li>
              ))}
            </ul>
          </StyledContent>
          <StyledContent>
            <h3>Backend&nbsp;</h3>
            <ul>
              {backendContent.map((content) => (
                <li>{content}</li>
              ))}
            </ul>
          </StyledContent>
          <StyledContent>
            <h3>Management&nbsp;</h3>
            <ul>
              {projectManagementContent.map((content) => (
                <li>{content}</li>
              ))}
            </ul>
          </StyledContent>
          <StyledContent>
            <h3>Design&nbsp;</h3>
            <ul>
              {designContent.map((content) => (
                <li>{content}</li>
              ))}
            </ul>
          </StyledContent>
        </StyledContentContainer>
      </StyledSkillsContainer>
    </>
  )
}

export default Skills
