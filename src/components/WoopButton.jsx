import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";

const bounceAnim = keyframes`
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

  ${props =>
    props.bounce &&
    css`
      animation: ${bounceAnim} 2s;
    `}
`;
const Woops = styled.span`
  font-size: 20px;
  margin-right: 8px;
`;

const addWoop = (id, updatePosts) => {
  return fetch(`/api/woop/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(() => updatePosts());
};

const WoopButton = ({ id, woops, updatePosts }) => {
  const [bouncing, setBouncing] = useState(false);

  return (
    <WoopContainer>
      <Woops>{woops}</Woops>
      <WoopButtonButton
        bounce={bouncing}
        onClick={() => {
          setBouncing(true);
          setTimeout(() => setBouncing(false), 1500);
          addWoop(id, updatePosts);
        }}
      >
        Woop
      </WoopButtonButton>
    </WoopContainer>
  );
};

export default WoopButton;
