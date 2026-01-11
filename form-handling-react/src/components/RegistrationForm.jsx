// src/components/RegistrationForm.jsx
import { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation: Check if fields are empty
    if (!username || !email || !password) {
      setErrors('All fields are required');
      return;
    }

    setErrors('');
    
    // Simulate API call
    console.log('Form submitted:', { username, email, password });
    alert('User registered successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration (Controlled)</h2>
      {errors && <p style={{ color: 'red' }}>{errors}</p>}
      
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
