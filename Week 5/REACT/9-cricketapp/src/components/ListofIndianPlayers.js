import React from 'react';

function ListofIndianPlayers({ players }) {
  const playerNames = ['Sachin', 'Dhoni', 'Virat', 'Rohit', 'Yuvraj', 'Raina'];
  const formattedPlayers = players.map((player, index) => {
    const label = ['First Player', 'Second Player', 'Third Player', 'Fourth Player', 'Fifth Player', 'Sixth Player'][index];
    return `${label}: ${playerNames[index] || player}`;
  });

  return (
    <section className="card">
      <h2>List of Indian Players Merged</h2>
      <ul className="player-list">
        {formattedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </section>
  );
}

export default ListofIndianPlayers;
