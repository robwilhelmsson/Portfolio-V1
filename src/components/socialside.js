
import React from "react";
import styled from "styled-components";
import { StyledIconBase } from '@styled-icons/styled-icon'
import { Github, Linkedin, Mail, Codepen } from "@styled-icons/feather"



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
  ${StyledIconBase} {
    color: var(--light-grey);
    height: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: auto;
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
            <Github className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/robwilhelmsson/" target="_blank" rel="noreferrer">
            <Linkedin className="icon" />
          </a>
          <a href="mailto:rob.wilhelmsson@gmail.com" target="_blank" rel="noreferrer">
            <Mail className="icon" />
          </a>
          <a href="https://codepen.io/robwilhelmsson" target="_blank" rel="noreferrer">
            <Codepen className="icon" />
          </a>
        </IconStyleWrapper>
      </StyledSideElement>
    </>
  );
};

export default Socialside;
