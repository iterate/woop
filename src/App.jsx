import React from "react";
import styled from "styled-components";

import Header from "@/components/Header";
import Editor from "@/components/Editor";
import Feed from "@/components/Feed";

const AppContainer = styled.div`
  background-color: #fafafa;
  color: #111;
  min-height: 100vh;
  padding: 0 30px;
`;

const App = () => (
  <AppContainer>
    <Header />
    <Editor />
    <Feed />
  </AppContainer>
);

export default App;
