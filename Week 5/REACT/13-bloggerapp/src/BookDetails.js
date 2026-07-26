const books = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-Improvement',
    summary: 'A practical guide to building lasting habits through small, consistent steps.'
  },
  {
    id: 2,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    summary: 'A timeless story about following your dreams and listening to your heart.'
  },
  {
    id: 3,
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Productivity',
    summary: 'An insightful book about focused work and achieving meaningful results.'
  },
  {
    id: 4,
    title: 'Educated',
    author: 'Tara Westover',
    genre: 'Memoir',
    summary: 'A powerful memoir about education, resilience, and self-discovery.'
  }
];

function BookDetails() {
  return (
    <section className="details-section">
      <h2>Books</h2>
      <div className="card-grid">
        {books.map((book) => (
          <article className="card" key={book.id}>
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p>{book.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BookDetails;
