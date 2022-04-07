// ! COMPONENTS
import User from './User';
// ! FILES
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/normalize.css';
import '../styles/app.css';

const url = 'http://localhost:8000/api/users';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    const response = await axios.get(url);
    const { data } = response;
    setLoading(false);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return (
      <main className='container-loader'>
        <div className='loading'></div>
      </main>
    );
  }

  return (
    <main className='main-container'>
      <User users={users} />
    </main>
  );
};

export default Home;
