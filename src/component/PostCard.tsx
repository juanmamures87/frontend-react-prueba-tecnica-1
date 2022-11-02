import { Post } from "../context/types";

function PostCard(post: Post) {
  return (
    <div>
      <h1>{post.title}</h1>
      <h3>Usuario: {post.userId}</h3>
      <p>{post.body.substring(0, 40)}...</p>
    </div>
  );
}

export default PostCard;
