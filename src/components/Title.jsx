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

const ExtremelyFancyTitle = styled.span`
  @import url("https://fonts.googleapis.com/css?family=Snowburst+One");
  font-family: "Snowburst One", cursive;
  font-size: 30px;
  margin: 10px;
  text-transform: uppercase;
`;

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
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
    inputRef.current.value = "";
    updateTitle();
  };

  useEffect(() => {
    updateTitle();
    intervalRef.current = setInterval(updateTitle, 3 * 1000);
    return () => clearInterval(intervalRef.current);
  }, []);
  return (
    <TitleWrapper>
      <ExtremelyFancyTitle>{title}</ExtremelyFancyTitle>
      <FormWrapper onSubmit={onSubmit}>
        <input placeholder="Title..." ref={inputRef} />
      </FormWrapper>
    </TitleWrapper>
  );
};

export default Title;
