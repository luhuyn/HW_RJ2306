import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import PostListPage from "./components/PostListPage";
import NewPostPage from "./components/NewPostPage";
import EditPostPage from "./components/EditPostPage";

const App = () => {
  return (
    <Router>
      <div>
        <Routes> 
          <Route path="/" element={<PostListPage />} /> 
          <Route path="/new" element={<NewPostPage />} />
          <Route path="/edit/:id" element={<EditPostPage />} />
        </Routes> 
      </div>
    </Router>
  );
};

export default App;
