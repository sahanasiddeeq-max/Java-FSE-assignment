import React from 'react';

function ListofPlayers({ players }) {
  return (
    <section className="card">
      <h2>List of Players</h2>
      <ul className="player-list">
        {players.map((player, index) => (
          <li key={index}>
            {player.name}
            <span>Score: {player.score}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ListofPlayers;
