type board = {
  flatId: string;
  boardId: string;
  posts: Post[];
};

type Post = {
  postId: string;
  userId: string;
  title: string;
  content: string;
  date: string;
  expiry: string;
};
