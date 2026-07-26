const blogs = [
  {
    id: 1,
    title: 'Designing for Calm',
    author: 'Mina Lee',
    category: 'UI/UX',
    description: 'Explores how minimalist design can make digital products feel more intuitive.'
  },
  {
    id: 2,
    title: 'The Future of AI Writing',
    author: 'Ava Brooks',
    category: 'Technology',
    description: 'Discusses how AI tools are reshaping storytelling and content creation.'
  },
  {
    id: 3,
    title: 'Morning Routines That Work',
    author: 'Daniel Ortiz',
    category: 'Lifestyle',
    description: 'Shares simple habits that help people start the day with energy and focus.'
  },
  {
    id: 4,
    title: 'Why Every Developer Should Write',
    author: 'Nina Shah',
    category: 'Programming',
    description: 'Highlights the benefits of documentation and technical writing for growth.'
  }
];

function BlogDetails() {
  return (
    <section className="details-section">
      <h2>Blogs</h2>
      <div className="card-grid">
        {blogs.map((blog) => (
          <article className="card" key={blog.id}>
            <h3>{blog.title}</h3>
            <p><strong>Author:</strong> {blog.author}</p>
            <p><strong>Category:</strong> {blog.category}</p>
            <p>{blog.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogDetails;
