import React, { useState } from "react";
import styled from "styled-components";

import Button from "@/components/Button";
import PartyButton from "@/components/PartyButton";
import Frame from "@/components/Frame";

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

const Editor = ({ callback }) => {
  const [content, setContent] = useState("");

  const onClick = () => {
    if (content === "") {
      return;
    }
    fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content })
    }).then(() => callback());
    setContent("");
  };

  const onChange = event => {
    setContent(event.target.value);
  };

  return (
    <EditorContainer>
      <EditorInput
        placeholder="<Woop... />"
        value={content}
        onChange={onChange}
      />
      <PartyButton onClick={onClick} />
      {content && content !== "" && (
        <Frame
          title="preview-frame"
          src={`/api/preview/?post=${encodeURIComponent(content)}`}
        />
      )}
    </EditorContainer>
  );
};

export default Editor;
