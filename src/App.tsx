import "./App.css";
import PostList from "./component/PostList";
import { PostContextProvider } from "./context/PostContext";

function App() {
  return (
    <PostContextProvider>
      <nav className="navbar">
        <h1>POSTS DEL MUNDO</h1>
      </nav>
      <main className="main">
        <section>
          <PostList />
        </section>
      </main>
    </PostContextProvider>
  );
}

export default App;
