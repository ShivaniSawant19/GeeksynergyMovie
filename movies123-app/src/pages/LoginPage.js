import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
    let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the name and password are matching
    const storedName = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (name !== storedName || password !== storedPassword) {
      setIsValid(false);
      
    }
    if(isValid){
        navigate('/movies');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        {!isValid && <p>Invalid Credentials</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;