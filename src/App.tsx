
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsPage from "./pages/PostsPage/PostsPage";
import OnePostPage from "./pages/OnePostPage/OnePostPage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/one-post" element={<OnePostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
