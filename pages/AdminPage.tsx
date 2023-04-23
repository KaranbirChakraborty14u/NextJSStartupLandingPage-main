import React, { useState } from 'react';
import { UserPage } from '../pages/UserPage';
import { CoursePage } from '../pages/courseNew';

interface Props {
  users: UserPage[];
  courses: Course;
}

const AdminPage: React.FC<Props> = ({ users, courses }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setSelectedUser(null);
  };

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    setSelectedCourse(null);
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <div>
        <h2>Users</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <button onClick={() => handleUserSelect(user)}>
                {user.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Courses</h2>
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              <button onClick={() => handleCourseSelect(course)}>
                {course.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {selectedUser && (
          <div>
            <h3>User Details</h3>
            <p>Name: {selectedUser.name}</p>
            <p>Email: {selectedUser.email}</p>
            <p>Role: {selectedUser.role}</p>
          </div>
        )}
        {selectedCourse && (
          <div>
            <h3>Course Details</h3>
            <p>Title: {selectedCourse.title}</p>
            <p>Description: {selectedCourse.description}</p>
            <p>Instructor: {selectedCourse.instructor}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
