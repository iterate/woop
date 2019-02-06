import React, { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Iframe = styled.iframe`
  border: none;
  background-color: transparent;
  height: 300px;
  width: 100%;
`;

const Frame = ({ id, html }) => {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef && contentRef.contentWindow.document.body;
  // eslint-disable-next-line react/no-danger
  const frameBody = <div dangerouslySetInnerHTML={{ __html: html }} />;

  return (
    <Iframe title={`iframe-${id}`} ref={setContentRef} scrolling="no">
      {mountNode && createPortal(frameBody, mountNode)}
    </Iframe>
  );
};

export default Frame;
