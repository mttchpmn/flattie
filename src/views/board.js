import React, { useContext, useState } from "react";
import { MainLayout } from "../layouts";

import { Typography, Layout } from "antd";
import { FlatContext } from "../components/context/flat-context";

const { Content } = Layout;
const { Title, Text } = Typography;

const Board = () => {
  const { flatData } = useContext(FlatContext);
  const [posts, setPosts] = useState([]);

  // Get all posts from API where flat_id = flatId
  const fetchPosts = () => {};

  // Send new post to API
  const createPost = (post) => {};

  // Delete post from API
  const deletePost = (postId) => {};

  return (
    <MainLayout>
      <Title level={2}>{flatData.flatName} Noticeboard</Title>
      <Content style={{ background: "#fff", padding: "10px" }}>Yo</Content>
    </MainLayout>
  );
};

export default Board;
