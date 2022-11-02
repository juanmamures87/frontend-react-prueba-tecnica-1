import { createContext, ReactNode, useState, useEffect } from "react";
import { Post } from "./types";

export const PostContext = createContext({});

interface Props {
  children: ReactNode;
}

export function PostContextProvider({ children }: Props) {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [idBorrar, setIdBorrar] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => error.log(error));
  }, []);

  function deletePost(id: number) {
    setPosts(posts.filter((idCard) => idCard.id !== id));
  }

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        deletePost,
        idBorrar,
        setIdBorrar,
        modal,
        setModal,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
