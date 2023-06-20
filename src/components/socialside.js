import React from "react";
import styled from "styled-components";
import { FiGithub, FiLinkedin, FiCodepen, FiMail } from "react-icons/fi"
import { IconContext } from "react-icons";

const StyledSideElement = styled.div`

  @media (max-width: 768px) {
    display: none;
  }

  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;
  z-index: 10;
  ::after {
    content: '';
    display: block;
    width: 1px;
    height: 100px;
    margin: 25px auto 0 auto;
    background-color: var(--light-grey);
  }
`;

const IconStyleWrapper = styled.div`
  a {
    color: var(--light-grey);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icon {
    margin-top: 25px;
    transition: all 0.4s ease 0s;
    cursor: pointer;
    :hover {
      transform: translateY(-3px);
      color: var(--orange);
    }
  }
`




const Socialside = () => {
  return (
    <>
      <StyledSideElement>
        <IconStyleWrapper>
          <a href="https://github.com/robwilhelmsson" target="_blank" rel="noreferrer">
            <IconContext.Provider value={{ size: '22px' }}>
              <FiGithub className="icon" />
            </IconContext.Provider>
          </a>
          <a href="https://www.linkedin.com/in/robwilhelmsson/" target="_blank" rel="noreferrer">
            <IconContext.Provider value={{ size: '22px' }}>
              <FiLinkedin className="icon" />
            </IconContext.Provider>
          </a>
          <a href="mailto:rob.wilhelmsson@gmail.com" target="_blank" rel="noreferrer">
            <IconContext.Provider value={{ size: '22px' }}>
              <FiMail className="icon" />
            </IconContext.Provider>
          </a>
          <a href="https://codepen.io/robwilhelmsson" target="_blank" rel="noreferrer">
            <IconContext.Provider value={{ size: '22px' }}>
              <FiCodepen className="icon" />
            </IconContext.Provider>
          </a>
        </IconStyleWrapper>
      </StyledSideElement>
    </>
  );
};

export default Socialside;
