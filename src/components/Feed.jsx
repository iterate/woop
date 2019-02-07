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
      {posts.map(({ id, woops, createdAt, user: { name, photo: image } }) => (
        <Post
          user={{ name, image }}
          id={id}
          woops={woops}
          key={id}
          timestamp={createdAt}
        />
      ))}
    </FeedContainer>
  );
};

export default Feed;
