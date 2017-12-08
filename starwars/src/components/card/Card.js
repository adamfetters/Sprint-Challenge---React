import React from 'react';
import './card.css';
import CharacterInfo from '../CharacterInfo/CharacterInfo.js';

const Card = ( { characters }) => {
  return (
    <div classname="character-card">
      <div className="character-name">
      <span><strong>{characters.name}</strong></span>
      </div>
      <CharacterInfo info={characters} />
    </div>
  );
}



export default Card;