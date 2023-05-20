import * as React from "react";
import Nav from "./nav";
import Socialside from "./socialside";
import EmailSide from "./emailside";
import styled from "styled-components";
import GlobalStyle from "../styles/globalStyles";


const StyledMain = styled.main`
  padding: 0 140px;
`;


const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      <Nav />
      <StyledMain>
        <Socialside />
        <EmailSide />
        <div id="content">
          {children}
        </div>
      </StyledMain>
    </>
  );
};

export default Layout;
