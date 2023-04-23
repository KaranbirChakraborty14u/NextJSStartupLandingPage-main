import CoursePage from './CoursePage';
import { useState, useEffect } from 'react';

const App = () => {
  const course = {
    id: '2',
    name: 'John Doe',
    lessons: [
      {
          id: '1',
          title: 'Introduction to Ethical Hacking',
          videoUrl: 'https://www.youtube.com/embed/x3IwvPvDpKE'
      },
      {
        id: '2',
        title: 'Advanced Ethical Hacking',
        videoUrl: "https://www.youtube.com/embed/x3IwvPvDpKE"
      },
      {
        id: '3',
        title: 'Web Application Security',
        videoUrl: 'https://www.youtube.com/embed/CIkU2h6_UH0'
      }
    ]
  };
  

 const CoursePage = () => {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessonListStyles = {
    listStyleType: 'none',
    padding: 0,
  };

  // const lessonItemStyles = {
  //   marginBottom: '2rem',
  //   cursor: 'pointer',
  // };

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
  };

  return (
    <>
      <h1>{course.name}</h1>
      <ul style={lessonListStyles}>
        {course.lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={lessonItemStyles}
            onClick={() => handleLessonClick(lesson)}
          >
            <h2>{lesson.title}</h2>
            {selectedLesson?.id === lesson.id && (
              <div>
                <iframe
                  src={lesson.videoUrl}
                  width="560"
                  height="315"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                ></iframe>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};




  // const [selectedLesson, setSelectedLesson] = useState(null);

  // function CourseNew() {
  //   const [selectedLesson, setSelectedLesson] = useState(null);
    
  //   useEffect(() => {
  //     const dropdown = document.getElementById('lessons-dropdown');
  //     const handleChange = (event) => {
  //       const lesson = course.lessons.find((l) => l.id === event.target.value);
  //       setSelectedLesson(lesson);
  //     };
      
  //     dropdown.addEventListener('change', handleChange);
  
  //     return () => {
  //       dropdown.removeEventListener('change', handleChange);
  //     };
  //   }, [course.lessons, setSelectedLesson]);

  //   return () => {
  //     dropdown.removeEventListener('change', () => {});
  //   };
  // }, 

  const appStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f6f6f6',
    color: '#333',
    fontFamily: 'sans-serif',
    border: '5px solid gold',
    boxSizing: 'border-box',
  };
  

  const headingStyles = {
    fontSize: '48px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: '30px',
    letterSpacing: '2px',
    color: '#444'
  };

  
const paragraphStyles = {
  fontSize: '24px',
  marginBottom: '30px',
  textAlign: 'center',
  lineHeight: '1.5',
  maxWidth: '800px'
};
const imageStyles = {
  width: '100%',
  maxWidth: '800px',
  marginTop: '50px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px'
};

const videoStyles = {
  width: '100%',
  maxWidth: '800px',
  height: '450px',
  marginTop: '50px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px'
};

const lessonListStyles = {
  listStyleType: 'none',
  margin: '50px',
  padding: '0',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gridGap: '20px'
};

const lessonItemStyles = {
  fontSize: '24px',
  color: '#555',
  marginTop: '15px',
  letterSpacing: '1px',
  fontWeight: 'bold',
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.2s ease',
  cursor: 'pointer',
  textAlign: 'center',
  lineHeight: '1.5',
  minHeight: '150px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}
const lessonItemHoverStyles = {
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
}
  return (
    <div style={appStyles}>
      <CoursePage course={course} />
      <div>
        {/* <h1 style={headingStyles}>{course.name}</h1> */}
        {/* <p style={paragraphStyles}>{course.description}</p> */}
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OCVNtsDskViRoyQtogH4PgAAAA%26pid%3DApi&f=1"
             alt="Course Preview"
             style={imageStyles} />
        <iframe 
          src="https://www.youtube.com/embed/x3IwvPvDpKE"
          title="YouTube video player"
          style={videoStyles}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <ul style={lessonListStyles}>
        {course.lessons.map((lesson) => (
            <li key={lesson.id} style={lessonItemStyles}>{lesson.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
