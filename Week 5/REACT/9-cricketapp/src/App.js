import './App.css';
import ListofPlayers from './components/ListofPlayers';
import Scorebelow70 from './components/Scorebelow70';
import OddPlayers from './components/OddPlayers';
import EvenPlayers from './components/EvenPlayers';
import ListofIndianPlayers from './components/ListofIndianPlayers';
import { mergedIndianPlayers } from './components/IndianPlayers';

function App() {
  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Peter', score: 80 },
    { name: 'Alice', score: 65 },
    { name: 'Bob', score: 90 },
    { name: 'Charlie', score: 55 },
    { name: 'Diana', score: 75 },
    { name: 'Evan', score: 60 },
    { name: 'Fiona', score: 85 },
    { name: 'George', score: 45 },
  ];

  let flag = false;

  if (flag === true) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Cricket Player Dashboard</h1>
        </header>

        <main className="dashboard">
          <ListofPlayers players={players} />
          <hr />

          <Scorebelow70 players={players} />
        </main>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cricket Player Dashboard</h1>
        {/* <p>Showing the second view with destructuring and merged arrays.</p> */}
      </header>

      <main className="dashboard">
        <OddPlayers />
        <hr />
        <EvenPlayers />
        <hr />
        <ListofIndianPlayers players={mergedIndianPlayers} />
      </main>
    </div>
  );
}

export default App;
