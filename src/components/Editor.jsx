import React from "react";
import styled from "styled-components";

import Button from "@/components/Button";

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: 10px;
  }
`;
const EditorInput = styled.textarea`
  height: 300px;
  border: solid 1px #aaa;
  padding: 3px;

  :focus {
    outline: none;
    background-color: black;
    color: white;
  }
`;

const Editor = () => (
  <EditorContainer>
    <EditorInput placeholder="<Woop... />" />
    <Button>Submit</Button>
  </EditorContainer>
);

export default Editor;
