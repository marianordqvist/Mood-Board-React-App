// eslint-disable-next-line no-unused-vars
import React from 'react';
import useBoard from '../../providers/BoardProvider/BoardProvider.hook.js';
import useSearch from '../../providers/SearchProvider/SearchProvider.hook.js';
import { CiBookmarkPlus, CiCircleMinus } from 'react-icons/ci';
import './Card.css';
function Card({ card, onClick }) {
  const { saveCard, deleteCard } = useBoard();
  const { setSavedCard } = useSearch();

  const handleSave = (taregtCard) => {
    saveCard(taregtCard);
    setSavedCard(taregtCard);
  };

  const handleDelete = (card) => {
    deleteCard(card);
  }

  return (
    <>
    <div className="card__wrapper">
        <img className="card" src={card.src} alt={card.alt} key={card.index} onClick={() => onClick(card)} />
        {card.isSaved === true ? (
          <button className="card__button" onClick={() => handleDelete(card)}>
            <CiCircleMinus />
          </button>
        ) : (
          <button
            className= "card__button"
            onClick={() => handleSave(card)}>
            <CiBookmarkPlus />
          </button>
        )}
    </div>
    </>
  );
}
export default Card;
