import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';
import EditPostPage from './pages/EditPostPage';
import NewPostPage from './pages/NewPostPage';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:postId" element={<PostDetailPage />} />
          <Route path="/edit-post/:postId" element={<EditPostPage />} />
          <Route path="/new-post" element={<NewPostPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;