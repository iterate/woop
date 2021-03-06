import React from "react";
import styled from "styled-components";
import { distanceInWordsToNow } from "date-fns";

import PostFrame from "@/components/PostFrame";
import WoopButton from "@/components/WoopButton";

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
const Link = styled.a`
  text-decoration: none;
`;
const PostFooter = styled.div`
  display: flex;
  align-items: center;
`;

const Post = ({ user, id, woops, timestamp, updatePosts }) => {
  return (
    <PostContainer>
      <PostHeader>
        <ProfilePicture src={user.image} alt="" />
        <UserName>{user.name}</UserName>
        <Timestamp>{distanceInWordsToNow(timestamp)}</Timestamp>
      </PostHeader>
      <PostFrame id={id} />
      <PostFooter>
        <Link
          href={`/api/post/${id}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span role="img" aria-label="internet">
            🌐
          </span>
        </Link>
      <WoopButton id={id} woops={woops} updatePosts={updatePosts} />
      </PostFooter>
      <Divider />
    </PostContainer>
  );
};
export default Post;
