import React from "react";
import styled from "styled-components";

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  right: 50px;
  z-index: 10;
`;

const StyledEmailWrapper = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* width: 60px; */
  /* margin: 0 15px; */

  a {
    margin: 20px auto 0 auto;
    padding: 10px;
    font-size: 15px;
    /* line-height: var(--fz-lg); */
    letter-spacing: 0.1rem;
    color: var(--light-grey);
    writing-mode: vertical-rl;
    text-decoration: none;

    /* &:hover,
    &:focus {
      transform: translateY(-3px);
    } */
  }

  p {
    writing-mode: vertical-rl;
    letter-spacing: -0.4rem;
    color: var(--light-grey);
  }
`;

const EmailSide = () => {
  return (
    <StyledSideElement>
      <StyledEmailWrapper>
        <a href="{`mailto:rob.wilhelmsson@gmail.com`}">
          rob.wilhelmsson@gmail.com
        </a>
        <p>————————</p>
      </StyledEmailWrapper>
    </StyledSideElement>
  );
};

export default EmailSide;
