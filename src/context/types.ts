export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostContextType = {
  posts: Array<Post>;
  setPosts: (value: Array<Post>) => void;
  deletePost: (id: number) => void;
  idBorrar: number;
  setIdBorrar: (value: number) => void;
  modal: boolean;
  setModal: (value: boolean) => void;
};
