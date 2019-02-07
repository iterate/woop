import React from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
`;

const WoopContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
const WoopButtonButton = styled.button`
  font-size: 20px;

  :focus {
    animation: ${bounce} 2s;
  }
`;
const Woops = styled.span`
  color: red;
  font-size: 20px;
  margin-right: 8px;
`;

const WoopButton = ({ id, woops }) => (
  <WoopContainer>
    <Woops>{woops}</Woops>
    <WoopButtonButton onClick={() => console.log(id)}>Woop</WoopButtonButton>
  </WoopContainer>
);

export default WoopButton;
