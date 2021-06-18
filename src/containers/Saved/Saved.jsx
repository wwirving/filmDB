import React, { useContext } from "react";
import styles from "./Saved.module.scss";
import { FilmContext } from "../../context/FilmProvider/FilmProvider";
import DisplayCard from "../../components/DisplayCard/DisplayCard";

const Saved = () => {

  const getCardJSX = (film) => {
    return <DisplayCard film={film}/>
  }

  const filmText = useContext(FilmContext);


  return (
    <>
      <p>Saved Films</p>
      {filmText.fav.map(getCardJSX)}
    </>
  );
};

export default Saved;
