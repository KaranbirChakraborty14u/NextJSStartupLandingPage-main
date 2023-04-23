import React, { useState } from 'react';
import styles from './Signup.module.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement your sign-up logic here
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
  <label className={styles.label}>
    <span>Username:</span>
    <input type="text" className={styles.input} value={username} onChange={(e) => setUsername(e.target.value)} />
  </label>
  <label className={styles.label}>
    <span>Password:</span>
    <input type="password" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
  </label>
  <label className={styles.label}>
    <span>Email:</span>
    <input type="email" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
  </label>
  <button type="submit" className={styles.button}>Sign up</button>
</form>

  );
};

export default Signup;
