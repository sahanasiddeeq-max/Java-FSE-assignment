import React from 'react';

function OddPlayers() {
  const indianTeam = ['Sachin', 'Dhoni', 'Virat', 'Rohit', 'Yuvraj', 'Raina'];
  const [first, , third, , fifth] = indianTeam;

  return (
    <section className="card">
      <h2>Odd Players</h2>
      <ul className="player-list">
        <li>First: {first}</li>
        <li>Third: {third}</li>
        <li>Fifth: {fifth}</li>
      </ul>
    </section>
  );
}

export default OddPlayers;
