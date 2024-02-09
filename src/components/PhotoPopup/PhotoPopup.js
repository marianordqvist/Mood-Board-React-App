import React from "react";
import { CiBookmarkPlus, CiCircleMinus } from 'react-icons/ci';
import "./PhotoPopup.css";
import useBoard from '../../providers/BoardProvider/BoardProvider.hook.js';


function PhotoPopup({ selectedCard, onClose }) {
  const { saveCard, deleteCard } = useBoard();

  const handleSave = (card) => {
    saveCard(card);
    onClose();
  };

  const handleDelete = (card) => {
    deleteCard(card);
    onClose();
  }
  return (
    <div className="popup popup_overley_dark">  
      <div className="popup__container">
        <img
          src={selectedCard.src}
          alt={selectedCard.alt}
          className="popup__image"
        />
        <div className="popup__buttonsContainer">
          {selectedCard.isSaved === true ? (
          <button className="popup__button" onClick={() => handleDelete(selectedCard)}>
            <CiCircleMinus />
          </button>
        ) : (
          <button className="popup__button" onClick={() => handleSave(selectedCard)}>
            <CiBookmarkPlus />
          </button>
        )}
          <button className="popup__closeButton" onClick={onClose}></button>
        </div>
      </div>   
    </div>
  );
}
export default PhotoPopup;

