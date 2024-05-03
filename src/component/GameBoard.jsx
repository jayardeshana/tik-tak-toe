import React from "react";

const GameBoard = ({ onSelectBox, board }) => {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => {
              return (
                <li key={colIndex}>
                  <button
                    onClick={() => onSelectBox(rowIndex, colIndex)}
                    disabled={playerSymbol !== null}
                  >
                    {playerSymbol}
                  </button>
                </li>
              );
            })}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
