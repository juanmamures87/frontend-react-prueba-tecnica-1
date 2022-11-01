import Post from "../types";

interface Props {
  posts: Array<Post>;
  idBuscar: number;
}

function SinglePost({ posts, idBuscar }: Props) {
  const singlePost = posts.filter((id) => id.id === idBuscar);

  return (
    <>
      {singlePost.map((post) => (
        <div key={post.id} className="singlePost">
          <h1>{post.title}</h1>
          <h2>{post.userId}</h2>
          <h2>{post.id}</h2>
          <p>{post.body}</p>
          <button className="button buttonEliminar">Eliminar Post</button>
        </div>
      ))}
    </>
  );
}

export default SinglePost;
