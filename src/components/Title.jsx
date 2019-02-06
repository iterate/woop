import React, { useEffect, useState, useRef } from "react";

const submitTitle = text => {
  return fetch("/api/title", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });
};

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
    <div>
      {title}
      <form onSubmit={onSubmit}>
        <input placeholder="Title..." ref={inputRef} />
      </form>
    </div>
  );
};

export default Title;
