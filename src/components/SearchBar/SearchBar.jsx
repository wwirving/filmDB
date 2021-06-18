import React, { useContext } from "react";
import FilmProvider, { FilmContext } from "../../context/FilmProvider/FilmProvider";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {

  const filmText = useContext(FilmContext);

  return (
    <>
     <input type="text" placeholder="search here ..." onBlur={filmText.getSearch}></input>
    </>
  );
};

export default SearchBar;
