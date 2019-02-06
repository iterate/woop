import React from "react";
import styled from "styled-components";
import { distanceInWordsToNow } from "date-fns";

import Frame from "@/components/Frame";

const PostContainer = styled.div``;
const PostHeader = styled.div`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;
const ProfilePicture = styled.img`
  border-radius: 20px;
  height: 20px;
`;
const UserName = styled.span``;
const Divider = styled.div`
  height: 1px;
  background-color: #ccc;
  width: 90%;
  margin: 24px auto;
`;
const Timestamp = styled.span`
  float: right;
`;

const Post = ({ user, post }) => {
  return (
    <PostContainer>
      <PostHeader>
        <ProfilePicture src={user.image} alt="" />
        <UserName>{user.name}</UserName>
        <Timestamp>{distanceInWordsToNow(post.createdAt)}</Timestamp>
      </PostHeader>
      <Frame id={post.id} html={post.html} />
      <Divider />
    </PostContainer>
  );
};
export default Post;
