import React from "react";
import styled from "styled-components";

import Post from "@/components/Post";

const FeedContainer = styled.div`
  & > *:not(:first-child) {
    margin-top: 10px;
  }
`;

const Feed = ({ posts }) => {
  return (
    <FeedContainer>
      {posts.map(({ id, user: { name, photo: image } }) => (
        <Post user={{ name, image }} id={id} key={id} />
      ))}
    </FeedContainer>
  );
};

export default Feed;
