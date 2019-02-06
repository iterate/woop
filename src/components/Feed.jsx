import React from "react";
import styled from "styled-components";

import Post from "@/components/Post";

const FeedContainer = styled.div``;

const Feed = () => (
  <FeedContainer>
    <Post
      user={{
        name: "Test Testman",
        image:
          "https://s3.amazonaws.com/fixd-wordpress-cdn/wp-content/uploads/2018/04/Picture-of-person.png"
      }}
      post={{ id: "123", html: "<p>test text</p>" }}
    />
  </FeedContainer>
);

export default Feed;
