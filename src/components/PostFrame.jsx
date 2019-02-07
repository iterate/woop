import React from "react";
import Frame from "@/components/Frame";

const PostFrame = ({ id }) => (
  <Frame title={`iframe-${id}`} src={`/api/post/${id}`} />
);

export default PostFrame;
