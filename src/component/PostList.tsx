import { useState } from "react";
import { render } from "react-dom";
import Post from "../types";
import PostCard from "./PostCard";
import SinglePost from "./SinglePost";

interface Props {
  posts: Array<Post>;
}

function PostList({ posts }: Props) {
  const [idPost, setIdPost] = useState<number>(0);

  function handlePost(idBuscar: number) {
    if (posts.filter((id) => id.id === idBuscar)) {
      setIdPost(idBuscar);
    } else {
      setIdPost(0);
    }
  }

  let singlePost;
  if (idPost != 0) {
    singlePost = <SinglePost posts={posts} idBuscar={idPost} />;
  } else {
    singlePost = null;
  }

  return (
    <>
      {singlePost}
      <div className="wrapper">
        {posts.map((post) => (
          <div
            onClick={(e) => handlePost(post.id)}
            className="card"
            key={post.id}
          >
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </>
  );
}

export default PostList;
