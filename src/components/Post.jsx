import React from "react";
import styled from "styled-components";

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

const Post = ({ user, post }) => {
  return (
    <PostContainer>
      <PostHeader>
        <ProfilePicture src={user.image} alt="" />
        <UserName>{user.name}</UserName>
      </PostHeader>
      <Frame id={post.id} html={post.html} />
    </PostContainer>
  );
};
export default Post;
