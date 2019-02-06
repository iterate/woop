import React from "react";
import styled from "styled-components";

const EditorContainer = styled.div``;
const EditorInput = styled.textarea`
  width: 100%;
  height: 300px;
  border-radius: 4px;
  border: solid 2px #ccc;
  padding: 8px;
  box-sizing: border-box;
  :focus {
    outline: none !important;
    background-color: black;
    color: white;
  }
`;
const Submit = styled.button`
  float: right;
  color: #111;
  background-color: #aaccff;
  padding: 4px 8px;
  border-radius: 40px;
  border: 1px solid #aaccff;
  :focus {
    outline: none !important;
    border: 1px solid black;
  }
`;

const Editor = () => (
  <EditorContainer>
    <EditorInput placeholder="<Woop... />" />
    <Submit>Submit</Submit>
  </EditorContainer>
);

export default Editor;
