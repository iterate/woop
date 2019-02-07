import React from "react";
import styled from "styled-components";

const Iframe = styled.iframe`
  border: none;
  background-color: transparent;
  height: 300px;
  width: 100%;
`;

const Frame = ({ id }) => (
  <Iframe 
    scrolling="no"
    title={`iframe-${id}`}
    src={`/api/post/${id}`}
    sandbox="allow-scripts allow-same-origin allow-forms"
  />
);

export default Frame;
