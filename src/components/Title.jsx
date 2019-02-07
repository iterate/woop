import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const submitTitle = text => {
  return fetch("/api/title", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });
};

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleInput = styled.input`
  @import url("https://fonts.googleapis.com/css?family=Snowburst+One");
  font-family: "Snowburst One", cursive;
  font-size: 30px;
  margin: 10px;
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  outline: none;
`;

const Title = () => {
  const intervalRef = useRef();
  const inputRef = useRef();
  const [title, setTitle] = useState("Woop");

  const updateTitle = async () => {
    const response = await fetch("/api/title");
    const { text } = await response.json();
    setTitle(text);
  };

  const onSubmit = async e => {
    e.preventDefault();
    await submitTitle(inputRef.current.value);
    updateTitle();
  };

  useEffect(() => {
    updateTitle();
    intervalRef.current = setInterval(updateTitle, 3 * 1000);
    return () => clearInterval(intervalRef.current);
  }, []);
  return (
    <TitleWrapper>
      <form onSubmit={onSubmit}>
        <TitleInput
          onChange={e => setTitle(e.target.value)}
          placeholder="Title..."
          ref={inputRef}
          value={title}
        />
      </form>
    </TitleWrapper>
  );
};

export default Title;
