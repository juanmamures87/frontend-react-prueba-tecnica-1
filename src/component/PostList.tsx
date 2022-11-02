import { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import { PostContextType } from "../context/types";
import PostCard from "./PostCard";
import SinglePost from "./SinglePost";

function PostList() {
  const { posts, setModal } = useContext(PostContext) as PostContextType;
  const [idPost, setIdPost] = useState<number>(0);

  function handlePost(idBuscar: number) {
    if (posts.filter((id) => id.id === idBuscar)) {
      setIdPost(idBuscar);
    } else {
      setIdPost(0);
    }
  }

  let singlePost: JSX.Element | null;
  if (idPost != 0) {
    singlePost = <SinglePost idBuscar={idPost} />;
  } else {
    singlePost = null;
  }

  return (
    <>
      {singlePost}
      <div className="wrapper">
        {posts.map((post) => (
          <div
            onClick={(e) => {
              handlePost(post.id);
              setModal(false);
            }}
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
