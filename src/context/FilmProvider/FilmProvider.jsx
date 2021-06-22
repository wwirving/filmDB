import React, {createContext, useState, useEffect } from "react";
import {firestore } from "../../firebase";

import styles from "./FilmProvider.module.scss";


export const FilmContext = createContext({});

const FilmProvider = (props) => {


  const [searchTerm, setSearchTerm] = useState("");

  const [filmArray, setFilmArray] = useState([]);

  const [favourites, setFavourites] = useState([]);

  const getSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
  }

  const [newFavourite, setNewFavourite] = useState({Title:"", Year:"", Poster:"", imdbID: ""})

  const selectFavourite = (e) => {
    const valueArray = e.target.value.split(',');
    // console.log(valueArray[1]);
    const title = valueArray[0];
    const year = valueArray[1];
    const poster = valueArray[2];
    const imdbid = valueArray[3];

    const updatedFavourite = {...newFavourite, Title: title, Year: year, Poster: poster, imdbID: imdbid};

    if (updatedFavourite.Title.length > 3){
      setNewFavourite(updatedFavourite);
    } else {
      return null;
    }

  }

  const getFavourites = () => {
    firestore.collection("favourites")
    .get()
    .then(querySnapshot => {
      const updatedFavourites = [...favourites]
      querySnapshot.docs.forEach(document => {
        updatedFavourites.push(document.data());
      });

      setFavourites(updatedFavourites);
    });
  };

  const addFavourites = () => {
    firestore.collection("favourites").add(newFavourite);
  }

  useEffect(() => {
    if (newFavourite.Title.length > 3){
      addFavourites();
    } else {
      return null;
    }
  },[newFavourite])

  useEffect(() => {
    getFavourites();
  },[]);

  useEffect(() => {
    if (searchTerm.length > 3){
      getFilm();
    } else {
      return null;
    }
  },[searchTerm]);


  const getFilm = () => {
    const API = `https://www.omdbapi.com/?i=tt3896198&apikey=89ea01ae&s=${searchTerm}`

    fetch(API).then((response) => {
      return response.json();
    }).then((result) => {
      if (result.Search){
        setFilmArray([...result.Search])
      } else {
        setFilmArray([])
      }
    })
  }
  
  useEffect(() => {
    console.log(filmArray);
  },[filmArray])

  const contextData = {
    getSearch,
    filmArr: filmArray,
    fav: favourites,
    selectFavourite,
  };

  return (
   <FilmContext.Provider value={contextData}>
     {props.children}
   </FilmContext.Provider>
  );
};

export default FilmProvider;
