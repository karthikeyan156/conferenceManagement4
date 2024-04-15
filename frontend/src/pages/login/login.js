import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css'; // Updated path if needed

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/user/login', {
        username,
        password,
      });

      // Check if login was successful and the role of the user
      if (response) {
        navigate('/home');
      } else {
        setError('Invalid username or password or you are not an admin.');
      }
    } catch (error) {
      setError('Login failed. Please try again later.');
    }
  };

  return (
    <div className={styles.container}>
    <div className={styles.orgName}>Organization Name</div>
      <div className={styles.loginFormContainer}>
        
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
