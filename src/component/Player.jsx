import React, { useState } from "react";

const Player = ({ name, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <li className={isActive && "active"}>
      <span className="player">
        {isEditing ? (
          <>
            <input
              type="text"
              defaultValue={playerName}
              onChange={handleNameChange}
            />
          </>
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "SAVE" : "EDIT"}</button>
    </li>
  );
};

export default Player;
