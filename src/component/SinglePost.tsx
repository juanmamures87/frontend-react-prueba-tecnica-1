import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { Post, PostContextType } from "../context/types";

interface Props {
  posts: Array<Post>;
  idBuscar: number;
}

function SinglePost({ posts, idBuscar }: Props) {
  const singlePost = posts.filter((id) => id.id === idBuscar);
  const { deletePost } = useContext(PostContext) as PostContextType;

  return (
    <>
      {singlePost.map((post) => (
        <div key={post.id} className="singlePost">
          <h1>{post.title}</h1>
          <h2>{post.userId}</h2>
          <h2>{post.id}</h2>
          <p>{post.body}</p>
          <button
            onClick={() => deletePost(post)}
            className="button buttonEliminar"
          >
            Eliminar Post
          </button>
        </div>
      ))}
    </>
  );
}

export default SinglePost;
