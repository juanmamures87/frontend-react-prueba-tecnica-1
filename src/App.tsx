import { useState, useEffect } from "react";
import "./App.css";
import PostList from "./component/PostList";
import Post from "./types";

function App() {
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => error.log(error));
  }, []);

  return (
    <>
      <nav className="navbar">
        <h1>POSTS DEL MUNDO</h1>
      </nav>
      <main className="main">
        <section>
          <PostList posts={posts} />
        </section>
      </main>
    </>
  );
}

export default App;
