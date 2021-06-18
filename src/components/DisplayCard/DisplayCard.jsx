import React, { useContext } from "react";
import styles from "./DisplayCard.module.scss";
import { FilmContext } from "../../context/FilmProvider/FilmProvider";


const DisplayCard = (props) => {

  const { Title, Year, Poster, imdbID } = props.film;

  const filmText = useContext(FilmContext);

  const valueArray = [Title, Year, Poster, imdbID];

  return (
    <>
    <div className={styles.mainContainer}>
      <div className={styles.imgBox}>
        <img src={Poster}></img>
      </div>
      <p>{Title}</p>
      <p>{Year}</p>
      <button value={valueArray} onClick={filmText.selectFavourite}>Add to favourites</button>
    </div>
    </>
  );
};

export default DisplayCard;
