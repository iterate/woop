import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";

import "./PartyButton.css";

const PartyContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
const PartyButtonButton = styled.button`
  font-size: 20px;
`;

const PartyButton = ({ onClick }) => {
  const [clicked, setclicked] = useState(false);

  return (
    <PartyContainer>
      <PartyButtonButton
        className={clicked ? "confetti-button animate" : "confetti-button"}
        onClick={() => {
          setclicked(true);
          setTimeout(() => setclicked(false), 1500);
          onClick();
        }}
      >
        Submit
      </PartyButtonButton>
    </PartyContainer>
  );
};

export default PartyButton;
