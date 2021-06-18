import React, { useContext } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import DisplayCard from "../../components/DisplayCard/DisplayCard";

import styles from "./Search.module.scss";
import { FilmContext } from "../../context/FilmProvider/FilmProvider";

const Search = () => {

  const getCardJSX = (film) => {
    return <DisplayCard film={film}/>
  }

  const filmText = useContext(FilmContext);
  
  return (
    <>
    <div className={styles.mainContainer}>
      <SearchBar/>
      <div className={styles.filmContainer}>
      {filmText.filmArr.map(getCardJSX)}
      </div>
    </div>
    </>
  );
};

export default Search;
