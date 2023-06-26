import * as React from "react";
import Nav from "./nav";
import Socialside from "./socialside";
import EmailSide from "./emailside";
import Footer from "./footer";
import styled from "styled-components";
import GlobalStyle from "../styles/globalStyles";
import MouseGlow from "./mouseglow";
import PropTypes from "prop-types";

const StyledMain = styled.main`
  padding: 0 140px;
  
  @media (max-width: 900px) {
    padding: 0 110px;
  }

  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <MouseGlow />
      <Nav />
      <StyledMain>
        <Socialside />
        <EmailSide />
        <div id="content">
          {children}
        </div>
        <Footer />
      </StyledMain>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
