import React, { useState } from 'react';

interface Lesson {
  id: string;
  title: string;
  content: string;
}

interface Course {
  id: string;
  name: string;
  description: string;
  lessons: Lesson[];
}

interface Props {
  course: Course;
}

const CoursePage: React.FC<Props> = ({ course }) => {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);

  const handleLessonSelect = (lessonId: string) => {
    setSelectedLesson(lessonId);
  };

  return (
    <div>
     <h1>{course?.name}</h1>
     <p>{course?.description}</p>
      <h2>Lessons</h2>
      <ul>
        {course?.lessons.map((lesson) => (
          <li key={lesson.id}>
            <button style={{color:'black'}} onClick={() => handleLessonSelect(lesson.id)}>
              {lesson.title}
            </button>
          </li>
        ))}
      </ul>
      <div>
        {selectedLesson && (
          <div>
            <h3>
              {course?.lessons.find((lesson) => lesson.id === selectedLesson)?.title}
            </h3>
            <p>
              {course?.lessons.find((lesson) => lesson.id === selectedLesson)?.content}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// const course: Course = {
//   id: '1',
//   name: 'John Doe',
//   description: 'john.doe@example.com',
//   lessons: [
//     {
//       id: '1',
//       title: 'Introduction to TypeScript',
//       content: 'Jane Smith'
//     }
//     // {
//     //   id: 2,
//     //   name: 'Advanced React',
//     //   instructor: 'John Smith',
//     //   description: 'Take your React skills to the next level',
//     //   enrolled: false
//     // }
//   ]
// };

export default CoursePage;
