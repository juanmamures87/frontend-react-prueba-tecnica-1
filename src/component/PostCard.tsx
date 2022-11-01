import Post from "../types";

interface Props {
  post: Post;
}

function PostCard({ post }: Props) {
  return (
    <div>
      <h1>{post.title}</h1>
      <h3>Usuario: {post.userId}</h3>
      <p>{post.body.substring(0, 40)}...</p>
    </div>
  );
}

export default PostCard;
