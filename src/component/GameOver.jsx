import React from "react";

const GameOver = ({ winner, handleRematch }) => {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} Won !!</p>}
      {!winner && <p>{winner} Match draw !!</p>}
      <p>
        <button onClick={handleRematch}>Rematch !</button>
      </p>
    </div>
  );
};

export default GameOver;
