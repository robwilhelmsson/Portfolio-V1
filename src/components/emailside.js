import React from "react";
import styled from "styled-components";

const StyledSideElement = styled.div`

@media (max-width: 768px) {
    display: none;
  }
  
  display: flex;
  width: 40px;
  position: fixed;
  bottom: 0;
  right: 40px;
  z-index: 10;
`;

const StyledEmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  ::after {
    content: '';
    display: block;
    width: 1px;
    height: 100px;
    margin: 20px auto 0 auto;
    background-color: var(--light-grey);
  }

  a {
    margin: 20px auto 0 auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fs-xxs);
    letter-spacing: 0.12rem;
    color: var(--light-grey);
    writing-mode: vertical-rl;
    text-decoration: none;
    transition: all 0.4s ease 0s;
    :hover {
      letter-spacing: 2px;
      color: var(--orange);
    }
  }
`;

const EmailSide = () => {
  return (
    <StyledSideElement>
      <StyledEmailWrapper>
        <a href="mailto:rob.wilhelmsson@gmail.com">
          rob.wilhelmsson@gmail.com
        </a>
      </StyledEmailWrapper>
    </StyledSideElement>
  );
};

export default EmailSide;
