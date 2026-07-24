import React from 'react';

function Scorebelow70({ players }) {
  const below70Players = players.filter((player) => player.score <= 70);

  return (
    <section className="card">
      <h2>List of Players having Scores Less than 70</h2>
      <ul className="player-list">
        {below70Players.map((player, index) => (
          <li key={index}>
            {player.name}
            <span>Score: {player.score}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Scorebelow70;
