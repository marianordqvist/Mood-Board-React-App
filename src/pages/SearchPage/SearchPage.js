import React, { useEffect } from 'react';
import useSearch from '../../providers/SearchProvider/SearchProvider.hook.js';
import './SearchPage.css';
import Search from '../../components/Search/Search.js';
import CardList from '../../components/CardList/CardList.js';
import useBoard from '../../providers/BoardProvider/BoardProvider.hook.js';

function SearchPage() {
  const { getSearchCards, getRandomCards, searchList, keyWord } = useSearch();
  const { boardList } = useBoard();

  useEffect(() => {
    if (keyWord) {
      getSearchCards(keyWord, boardList);
    } else {
      getRandomCards(boardList);
    }
  }, [keyWord, boardList]);

  return (
    <div className="searchPage">
      <Search />
      <CardList cardsList={searchList} />
    </div>
  );
}

export default SearchPage;
