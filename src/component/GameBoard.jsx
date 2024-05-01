import React, { useState } from "react";

const GameBoard = ({ onSelectBox, board }) => {
  //   const [gameboard, setGameBoard] = useState(initialGameBoard);

  //   const handleSelectedBox = (rowIndex, colIndex) => {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedBoard;
  //     });

  //     onSelectBox();
  //   };

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
