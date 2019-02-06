import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Header from "@/components/Header";
import Editor from "@/components/Editor";
import Feed from "@/components/Feed";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fafafa;
    color: #111;
    box-sizing: border-box;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  padding: 0 30px;

  & > *:not(:first-child) {
    margin-top: 20px;
  }
`;

const App = () => (
  <AppContainer>
    <GlobalStyle />
    <Header />
    <Editor />
    <Feed />
  </AppContainer>
);

export default App;
