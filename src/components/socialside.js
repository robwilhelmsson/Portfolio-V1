
import React from "react";
import styled from "styled-components";
// import * as feather from '@styled-icons/feather'
// import { GithubIcon } from "@styled-icons/feather/Github"
// import { LinkedinIcon } from "@styled-icons/feather/Linkedin"
// import { TwitterIcon } from "@styled-icons/feather/Twitter"
import {StyledIconBase} from '@styled-icons/styled-icon'
import { Github, Linkedin, Twitter } from "@styled-icons/feather"

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;
  z-index: 10;
`;

const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: var(--light-grey);
    height: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: auto;
  }
  p {
    color: var(--light-grey);
    writing-mode: vertical-rl;
    margin-top: 20px;
    letter-spacing: -0.4rem;
  }
  .icon {
    margin-top: 20px;
  }
`




const Socialside = () => {
  return (
    <>
      <StyledSideElement>
        <IconStyleWrapper>
          <Github className="icon" />
          <Linkedin className="icon"/>
          <Twitter className="icon" />
          <p>———————————————————</p>
        </IconStyleWrapper>
      </StyledSideElement>
    </>
  );
};

export default Socialside;
