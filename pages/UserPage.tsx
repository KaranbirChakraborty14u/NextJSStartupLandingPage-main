import React from 'react';
import styles from '../pages/UserPage.module.css';

interface UserPageProps {
  user: User;
}

function UserPage({ user }: UserPageProps) {
  return (
    <div className={styles['user-page-container']}>
      <h1 className={styles['user-page-heading']}>Welcome, {user.name}!</h1>
      <p className={styles['user-page-email']}>Email: {user.email}</p>
      <h2 className={styles['user-page-course-heading']}>My Courses</h2>
      <ul className={styles['user-page-course-list']}>
        {user.courses.map(course => (
          <li key={course.id} className={`${styles['user-page-course-item']} ${course.enrolled ? styles['enrolled'] : ''}`}>
            {course.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  courses: [
    {
      id: 1,
      name: 'Introduction to TypeScript',
      instructor: 'Jane Smith',
      description: 'Learn the basics of TypeScript',
      enrolled: true
    },
    {
      id: 2,
      name: 'Advanced React',
      instructor: 'John Smith',
      description: 'Take your React skills to the next level',
      enrolled: false
    }
  ]
};

export default function App() {
  return <UserPage user={user} />;
}
