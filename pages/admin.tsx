import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles['login-container']}>
      <h1 className={styles['login-header']}>Admin</h1>
      <form>
        <label htmlFor="email" className={styles['login-label']}>Email</label>
        <input
          type="email"
          id="email"
          className={styles['login-input']}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className={styles['login-label']}>Password</label>
        <input
          type="password"
          id="password"
          className={styles['login-input']}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className={styles['login-button']}>Login</button>
      </form>
    </div>
  );
};

export default Login;
