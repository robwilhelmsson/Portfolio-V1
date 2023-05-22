
import React from "react";
import styled from "styled-components";
// import * as feather from '@styled-icons/feather'
// import { GithubIcon } from "@styled-icons/feather/Github"
// import { LinkedinIcon } from "@styled-icons/feather/Linkedin"
// import { TwitterIcon } from "@styled-icons/feather/Twitter"
import {StyledIconBase} from '@styled-icons/styled-icon'
import { Github, Linkedin, Twitter } from "@styled-icons/feather"

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
    height: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: auto;
  }
  .icon {
    margin-top: 25px;
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
        </IconStyleWrapper>
      </StyledSideElement>
    </>
  );
};

export default Socialside;
