import React, { useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Iframe = styled.iframe`
  border: none;
  background-color: transparent;
`;

const Frame = ({ id, html }) => {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef && contentRef.contentWindow.document.body;
  // eslint-disable-next-line react/no-danger
  const frameBody = <div dangerouslySetInnerHTML={{ __html: html }} />;

  return (
    <Iframe title={`iframe-${id}`} ref={setContentRef}>
      {mountNode && createPortal(frameBody, mountNode)}
    </Iframe>
  );
};

Frame.propTypes = {
  id: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired
};

export default Frame;
