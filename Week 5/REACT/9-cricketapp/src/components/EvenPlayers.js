import React from 'react';

function EvenPlayers() {
  const indianTeam = ['Sachin', 'Dhoni', 'Virat', 'Rohit', 'Yuvraj', 'Raina'];
  const [, second, , fourth, , sixth] = indianTeam;

  return (
    <section className="card">
      <h2>Even Players</h2>
      <ul className="player-list">
        <li>Second: {second}</li>
        <li>Fourth: {fourth}</li>
        <li>Sixth: {sixth}</li>
      </ul>
    </section>
  );
}

export default EvenPlayers;
