import React from 'react';

export const IndianTeam = ['Sachin', 'Dhoni', 'Virat', 'Rohit', 'Yuvraj', 'Raina'];

const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];

export const mergedIndianPlayers = [...T20Players, ...RanjiPlayers];

function IndianPlayers() {
  return (
    <section className="card">
      <h2>Indian Players</h2>
      <ul className="player-list">
        {IndianTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </section>
  );
}

export default IndianPlayers;
