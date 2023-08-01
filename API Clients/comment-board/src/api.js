const API_URL = 'http://localhost:3000';

export const getUsers = () => fetch(`${API_URL}/users`).then((response) => response.json());

export const getComments = () => fetch(`${API_URL}/comments`).then((response) => response.json());

export const getPosts = () => fetch(`${API_URL}/posts`).then((response) => response.json());
