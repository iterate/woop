import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Editor from "@/components/Editor";
import Feed from "@/components/Feed";
import Header from "@/components/Header";

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

const App = () => {
  const [posts, setPosts] = useState([]);
  const intervalRef = useRef();

  const updatePosts = () =>
    fetch("/api/post")
      .then(res => res.json())
      .then(p => {
        p.sort(
          ({ createdAt: a }, { createdAt: b }) => new Date(b) - new Date(a)
        );
        setPosts(p);
      });

  useEffect(() => {
    updatePosts();
    intervalRef.current = setInterval(updatePosts, 3 * 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Editor callback={updatePosts} />
      <Feed posts={posts} updatePosts={updatePosts} />
    </AppContainer>
  );
};

export default App;
