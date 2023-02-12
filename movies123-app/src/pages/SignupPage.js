import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');
    let navigate = useNavigate();
  const handleSubmit = (e) => {
    // Store the data locally
    e.preventDefault()
    localStorage.setItem('name', name);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('profession', profession);
    alert("input submit");
    navigate('/login');

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
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="phone">Phone:</label>
        <input
          type="phone"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <br />
        <label htmlFor="profession">Profession:</label>
        <select
          name="profession"
          value={profession}
          onChange={e => setProfession(e.target.value)}
        >
          <option value="">Select</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Tester">Tester</option>
          <option value="Product Manager">Product Manager</option>
        </select>
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;