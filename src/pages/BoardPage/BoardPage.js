import "./BoardPage.css";
import { ReactComponent as HeartIcon } from "../../Icons/heart-dark.svg";
import React from 'react';
import useBoard from '../../providers/BoardProvider/BoardProvider.hook.js';
import './BoardPage.css';
import CardList from '../../components/CardList/CardList.js';

export default function BoardPage() {
 const { boardList, likes, handleLikes, boardTitle, onChangeTitle } = useBoard();

  function onSubmitForm(e) {
    e.preventDefault();
  }

  return (
    <section className="boardpage">
      <div className="boardpage__title">
        <form className="boardpage__titleForm" onSubmit={onSubmitForm}>
          <input
            className="boardpage__input"
            type="text"
            onChange={(e) => onChangeTitle(e)}
            placeholder={boardTitle ? boardTitle : "Board title..."}
          />
        </form>
      </div>
      <div className="boardpage__container">
        <div className="boardpage__likesContainer">
          <div className="boardpage__likes">
            {likes}
            <div className="boardpage__heartButton" onClick={handleLikes}>
              <HeartIcon className="boardpage__heartIcon" />
            </div>
          </div>
        </div>
        <div className="boardPage">
      <CardList cardsList={boardList} />
    </div>
      </div>
    </section>
  );
}