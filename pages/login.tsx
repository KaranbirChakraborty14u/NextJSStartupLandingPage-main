//Verification of login data
// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import styles from './login.module.css';

// interface LoginCredentials {
//   email: string;
//   password: string;
// }

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const credentials: LoginCredentials = { email, password };

//     try {
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Login successful:', data);
//         router.push('/UserPage'); // navigate to dashboard page
//       } else {
//         const error = await response.text();
//         console.error('Login failed:', error);
//       }
//     } catch (err) {
//       console.error('Server error:', err);
//     }
//   };

//   return (
//     <div className={styles['login-container']}>
//       <h1 className={styles['login-header']}>Login Page</h1>
//       <form onSubmit={handleLogin}>
//         <label htmlFor="email" className={styles['login-label']}>Email</label>
//         <input
//           type="email"
//           id="email"
//           className={styles['login-input']}
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <label htmlFor="password" className={styles['login-label']}>Password</label>
//         <input
//           type="password"
//           id="password"
//           className={styles['login-input']}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit" className={styles['login-button']}>Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './login.module.css';
import credentials from '../pages/credentials';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        router.push('/UserPage');
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return (
    <div className={styles['login-container']}>
      <h1 className={styles['login-header']}>Login Page</h1>
      <form onSubmit={handleSubmit}>
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


// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import styles from './login.module.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         router.push('/dashboard');
//       } else {
//         const error = await response.text();
//         throw new Error(error);
//       }
//     } catch (err) {
//       console.error(err);
//       alert(err.message);
//     }
//   };

//   return (
//     <div className={styles['login-container']}>
//       <h1 className={styles['login-header']}>Login Page</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email" className={styles['login-label']}>Email</label>
//         <input
//           type="email"
//           id="email"
//           className={styles['login-input']}
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <label htmlFor="password" className={styles['login-label']}>Password</label>
//         <input
//           type="password"
//           id="password"
//           className={styles['login-input']}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit" className={styles['login-button']}>Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
