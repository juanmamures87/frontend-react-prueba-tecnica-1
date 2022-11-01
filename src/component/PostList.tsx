import Post from "../types";
import PostCard from "./PostCard";

interface Props {
  posts: Array<Post>;
}

function PostList({ posts }: Props) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}

export default PostList;
