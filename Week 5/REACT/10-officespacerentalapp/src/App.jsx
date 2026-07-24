import './App.css'
import officeInteriorImg from './assets/office-interior-design.jpg'
import bannerImg from './assets/Banner-Product-PrivateOffice.jpg'
import imagesJpeg from './assets/images.jpeg'
import workspaceImg from './assets/62db3c671745e98cb27690dff96f8033d2bb7f35-2048x1010.jpg'

function App() {
  // An array of office objects to display with map()
  const offices = [
    {
      name: 'Metro Plaza Office',
      rent: 68000,
      address: '120 Main Avenue, Midtown',
      image: officeInteriorImg
    },
    {
      name: 'River View Suites',
      rent: 59000,
      address: '87 River Road, East End',
      image: bannerImg
    },
    {
      name: 'Sunset Workspaces',
      rent: 71000,
      address: '300 Sunset Boulevard, West City',
      image: imagesJpeg
    },
    {
      name: 'Tech Hub Loft',
      rent: 63000,
      address: '900 Innovation Lane, Silicon Park',
      image: workspaceImg
    }
  ]

  return (
    <div className="app">
      <header className="page-header">
        <h1>Office Space Rental App</h1>
        <p className="intro">
          Discover modern office spaces for startups, growing teams, and established businesses.
          Browse the latest listings and compare locations, prices, and amenities.
        </p>
      </header>

      <section className="office-list">
        {offices.map((office, index) => (
          <article className="office-card" key={`${office.name}-${index}`}>
            <img src={office.image} alt={office.name} className="office-image" />
            <h2>{office.name}</h2>
            <p>
              <strong>Rent:</strong>{' '}
              <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
                ₹{office.rent}
              </span>
            </p>
            <p>
              <strong>Address:</strong> {office.address}
            </p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default App
