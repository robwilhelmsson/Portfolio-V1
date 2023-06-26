import React from "react";
import styled from "styled-components";
import { bool, func } from 'prop-types';

const StyledBurger = styled.button`
  @media (min-width: 769px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  position: absolute;
  top: 4.7%;
  right: 42px;
  height: 30px;
  width: 60px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 11;
  transition: all 0.3s ease-in-out;
  div {
    width: 40px;
    height: 2px;
    transition: all 0.7s ease-in-out;
    background: var(--orange);
    border-radius: 1px;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ menuOpen }) => menuOpen ? 'rotate(225deg) translateX(-34px) translateY(-0px)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ menuOpen }) => menuOpen ? '0' : '1'};
      transform: ${({ menuOpen }) => menuOpen ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ menuOpen }) => menuOpen ? 'rotate(135deg) translateX(-34px) translateY(0px)' : 'rotate(0)'};
    }
  }
  .mid {
    width: 30px;
  }
`

const Burger = ({ menuOpen, setMenuOpen }) => {

  return (
    <StyledBurger menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
      <div className="top"></div>
      <div className="mid"></div>
      <div className="bot"></div>
    </StyledBurger>
  )
}

Burger.propTypes = {
  menuOpen: bool.isRequired,
  setMenuOpen: func.isRequired,
};

export default Burger
