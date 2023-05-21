import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${variables}

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    background-color: var(--dark-green);
    font-family: var(--font-sans);

    .large-heading {
      font-size: clamp(30px, 8vw, 65px);
      font-weight: 600;
      margin: 0 0 10px 0;
    }

    .medium-heading {
      font-size: clamp(30px, 8vw, 50px);
      font-weight: 500;
      margin: 0 0 10px 0;
    }
  };
`;

export default GlobalStyle;
