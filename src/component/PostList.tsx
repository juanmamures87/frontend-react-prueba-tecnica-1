import { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import { PostContextType } from "../context/types";
import AvisoEliminar from "./AvisoEliminar";
import PostCard from "./PostCard";
import SinglePost from "./SinglePost";

function PostList() {
  const { posts } = useContext(PostContext) as PostContextType;
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
      <AvisoEliminar />
      <div className="wrapper">
        {posts.map((post) => (
          <div
            onClick={(e) => handlePost(post.id)}
            className="card"
            key={post.id}
          >
            <PostCard
              body={post.body}
              id={post.id}
              title={post.title}
              userId={post.userId}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default PostList;
