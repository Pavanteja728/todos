import axios from 'axios';

const login = async (username, password) => {
  const response = await axios.post('http://localhost:3010/login', { username, password });
  const token = response.data.token;
  localStorage.setItem('token', token);
  return token;
};

const logout = () => {
  localStorage.removeItem('token');
};

const getToken = () => {
  return localStorage.getItem('token');
};

export { login, logout, getToken };