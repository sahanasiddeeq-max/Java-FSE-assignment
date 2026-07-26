const courses = [
  {
    id: 1,
    title: 'React Fundamentals',
    instructor: 'Sarah Murphy',
    duration: '4 weeks',
    level: 'Beginner'
  },
  {
    id: 2,
    title: 'UI Design Essentials',
    instructor: 'Liam Chen',
    duration: '3 weeks',
    level: 'Intermediate'
  },
  {
    id: 3,
    title: 'JavaScript Mastery',
    instructor: 'Riya Patel',
    duration: '6 weeks',
    level: 'Intermediate'
  },
  {
    id: 4,
    title: 'Data Visualization Basics',
    instructor: 'Owen Brooks',
    duration: '5 weeks',
    level: 'Beginner'
  }
];

function CourseDetails() {
  return (
    <section className="details-section">
      <h2>Courses</h2>
      <div className="card-grid">
        {courses.map((course) => (
          <article className="card" key={course.id}>
            <h3>{course.title}</h3>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Level:</strong> {course.level}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CourseDetails;
