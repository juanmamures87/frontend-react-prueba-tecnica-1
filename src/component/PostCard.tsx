import Post from "../types";

interface Props {
  post: Post;
}

function PostCard({ post }: Props) {
  return (
    <div className="wrapper">
      <div className="card">
        <h1>{post.title}</h1>
        <h3>Usuario: {post.userId}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default PostCard;
