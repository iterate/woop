import React from "react";
import styled from "styled-components";

const Iframe = styled.iframe`
  border: none;
  background-color: transparent;
  width: 100%;
`;

const Frame = ({ id }) => (
  <Iframe
    title={`iframe-${id}`}
    src={`/api/post/${id}`}
    sandbox="allow-scripts allow-same-origin allow-forms"
  />
);

export default Frame;
