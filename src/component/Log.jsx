import React from "react";

const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.box.row}${turn.box.col}`}>
          {turn.player} selected {turn.box.row}, {turn.box.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
