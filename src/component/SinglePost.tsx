import { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import { Post, PostContextType } from "../context/types";
import AvisoEliminar from "./AvisoEliminar";

interface Props {
  idBuscar: number;
}

function SinglePost({ idBuscar }: Props) {
  const { setIdBorrar, modal, setModal, posts } = useContext(
    PostContext
  ) as PostContextType;
  const singlePost = posts.filter((id) => id.id === idBuscar);

  let divModal: JSX.Element | null;
  if (modal) {
    divModal = <AvisoEliminar />;
  } else {
    divModal = null;
  }

  return (
    <div className="information">
      {singlePost.map((post) => (
        <div key={post.id} className="singlePost">
          <h1>
            <u>{post.title}</u>
          </h1>
          <h4 className="singlePost__numPost">Nº.Post: {post.id}</h4>
          <h2>Usuario: {post.userId}</h2>
          <p>{post.body}</p>
          <button
            onClick={() => {
              setModal(true);
              setIdBorrar(post.id);
            }}
            className="singlePost__buttonEliminar"
          >
            Eliminar Post
          </button>
        </div>
      ))}
      {divModal}
    </div>
  );
}

export default SinglePost;
