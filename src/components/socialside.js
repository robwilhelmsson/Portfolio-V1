import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillContacts } from "react-icons/ai";
import styled from "styled-components";

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 50px;
  z-index: 10;
`;

const StyledSocialWrapper = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: auto;
  padding: 0px;

  p {
    writing-mode: vertical-rl;
    letter-spacing: -0.4rem;
  }
`;

// const SocialIcons

const Socialside = () => {
  return (
    <>
      <StyledSideElement>
        <StyledSocialWrapper>
          <AiFillGithub size={35} style={{ fill: "black" }} />
          <AiFillLinkedin size={35} style={{ fill: "black" }} />
          <AiFillContacts size={35} style={{ fill: "black" }} />
          <p>————————</p>
        </StyledSocialWrapper>
      </StyledSideElement>
    </>
  );
};

export default Socialside;
