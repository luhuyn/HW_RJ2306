import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDetail = ({ userId, onCancel }) => {
  const [name, setName] = useState('');
  const [articles, setArticles] = useState([]);
  const [articleTitle, setArticleTitle] = useState('');

  useEffect(() => {
    if (userId) {
      getUser(userId);
      getArticles(userId);
    }
  }, [userId]);

  const getUser = async (id) => {
    try {
      const response = await axios.get(`https://my-json-server.typicode.com/codegym-vn/mock-api-users/users/${id}`);
      setName(response.data.name);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  const getArticles = async (userId) => {
    try {
      const response = await axios.get(
        `https://my-json-server.typicode.com/codegym-vn/mock-api-articles/articles?user_id=${userId}`
      );
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const handleAddOrUpdateUser = async () => {
    try {
      if (userId) {
        await axios.put(`https://my-json-server.typicode.com/codegym-vn/mock-api-users/users/${userId}`, { name });
      } else {
        await axios.post('https://my-json-server.typicode.com/codegym-vn/mock-api-users/users', { name });
      }
      alert('User saved successfully.');
      onCancel();
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleAddArticle = async () => {
    try {
      await axios.post('https://my-json-server.typicode.com/codegym-vn/mock-api-articles/articles', {
        title: articleTitle,
        user_id: userId,
      });
      alert('Article added successfully.');
      setArticleTitle('');
      getArticles(userId);
    } catch (error) {
      console.error('Error adding article:', error);
    }
  };

  const handleDeleteArticle = async (articleId) => {
    try {
      await axios.delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-articles/articles/${articleId}`);
      alert('Article deleted successfully.');
      getArticles(userId);
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  return (
    <div>
      <h2>User Detail</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAddOrUpdateUser}>{userId ? 'Update' : 'Add'}</button>
      <button onClick={onCancel}>Back to Home</button>

      <h3>Articles</h3>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <span>Title: {article.title}</span>
            <button onClick={() => handleDeleteArticle(article.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <input type="text" value={articleTitle} onChange={(e) => setArticleTitle(e.target.value)} />
      <button onClick={handleAddArticle}>Add</button>
    </div>
  );
};

export default UserDetail;
