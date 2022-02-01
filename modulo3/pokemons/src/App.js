import React from "react";
import Router from "./routers/Router";
import GlobalState from "./global/GlobalState";
import styled, { createGlobalStyle  } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Josefin Sans', sans-serif;
    padding: 0;
    margin: 0;
    max-width: 100vw;
  }
`;

export default function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  );
}