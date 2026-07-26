import { useState } from 'react';
import './App.css';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [activeView, setActiveView] = useState('books');

  let statusMessage;
  if (activeView === 'books') {
    statusMessage = 'Showing the latest book recommendations.';
  } else if (activeView === 'blogs') {
    statusMessage = 'Showing popular blog articles.';
  } else {
    statusMessage = 'Showing curated course options.';
  }

  const detailPanel = activeView === 'books'
    ? <BookDetails />
    : activeView === 'blogs'
      ? <BlogDetails />
      : <CourseDetails />;

  const showPrompt = activeView === 'blogs' && (
    <p className="helper-text">Fresh ideas and thoughtful writing are waiting for you.</p>
  );

  const emptyState = activeView === 'courses' ? (
    <p className="helper-text">Choose a course and start your next learning step today.</p>
  ) : null;

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Blogger App</h1>
        <p>Explore books, blogs, and courses in one place.</p>
      </header>

      <nav className="button-group">
        <button onClick={() => setActiveView('books')}>Books</button>
        <button onClick={() => setActiveView('blogs')}>Blogs</button>
        <button onClick={() => setActiveView('courses')}>Courses</button>
      </nav>

      <main className="content-area">
        <p className="status-message">{statusMessage}</p>
        {showPrompt}
        {emptyState}
        {detailPanel}
      </main>
    </div>
  );
}

export default App;
