import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the form from submitting traditionally
    try {
      const response = await axios.post('http://localhost:3000/user/login', {
        username,
        password,
      });
  //  let  response = {
  //   "data":{
  //       "status":"success"
  //   }
  //  }
      // Assuming the API returns a status or a token to indicate success
      if (response) {
        navigate('/home'); // Navigate to the homepage on successful login
      } else if(response.data.role!=='admin'){
        setError('Your are not admin user');
      }else {
        setError('Invalid username or password.');
    } 
  }catch (error) {
      setError('Login failed. Please try again later.');
    }
  };

  return (
    <div className="login-form-container">
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
        {error && <div>{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
