import { createContext, ReactNode, useState, useEffect } from "react";
import { Post } from "./types";

export const PostContext = createContext({});

interface Props {
  children: ReactNode;
}

export function PostContextProvider({ children }: Props) {
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => error.log(error));
  }, []);

  function deletePost({ id }: Post) {
    setPosts(posts.filter((idCard) => idCard.id !== id));
  }

  return (
    <PostContext.Provider value={{ posts, setPosts, deletePost }}>
      {children}
    </PostContext.Provider>
  );
}
