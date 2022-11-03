import "./App.css";
import PostList from "./component/PostList";
import reactImg from "./assets/react.svg";
import typeImg from "./assets/typescript.svg";
import { PostContextProvider } from "./context/PostContext";

function App() {
  return (
    <PostContextProvider>
      <nav className="navbar">
        <h1 className="navbar__titulo">💭 APRENDE CON IDEAS</h1>
        <div className="navbar_imagen">
          <img src={reactImg} alt="React" width="10%" />
          <img src={typeImg} alt="React" width="10%" />
        </div>
        <h3 className="navbar__autor">Juanma Castro Arjona</h3>
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
