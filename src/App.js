import { useState } from "react";
import GameBoard from "./component/GameBoard";
import Player from "./component/Player";
import Log from "./component/Log";

import { WINNING_COMBINATION } from "../src/winning-combination";
import GameOver from "./component/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const derivedActivePlayer = (gameTurns) => {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
};

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = derivedActivePlayer(gameTurns);

  let gameboard = [...initialGameBoard.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { box, player } = turn;
    const { row, col } = box;

    gameboard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATION) {
    const firstBoxSymbol = gameboard[combination[0].row][combination[0].col];
    const secondBoxSymbol = gameboard[combination[1].row][combination[1].col];
    const thirdBoxSymbol = gameboard[combination[2].row][combination[2].col];

    if (
      firstBoxSymbol &&
      firstBoxSymbol === secondBoxSymbol &&
      firstBoxSymbol === thirdBoxSymbol
    ) {
      winner = firstBoxSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectedBox = (rowIndex, colIndex) => {
    setGameTurns((prevTurn) => {
      const currentPlayer = derivedActivePlayer(prevTurn);

      const updatedTurns = [
        { box: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];

      return updatedTurns;
    });
  };

  const handleRematch = () => {
    setGameTurns([]);
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="0" isActive={activePlayer === "O"} />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} handleRematch={handleRematch} />
        )}
        <GameBoard onSelectBox={handleSelectedBox} board={gameboard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
