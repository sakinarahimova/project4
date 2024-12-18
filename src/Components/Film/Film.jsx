import React, { useState, useEffect } from 'react';
import FilmStyle from './Film.module.css';
import List from '../List/List';
import noPhoto from './images/no-pictures.png'
const Film = ({ lists, setLists, isDisable, setIsDisable ,listName , setListName , isListSaved, setIsListSaved 
}) => {
  const [inp, setInp] = useState('');
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const takeInput = (e) => {
    setInp(e.target.value);
  };

  const searchInput = () => {
    if (inp.trim() !== '') {
      setSearch(inp);
      setInp('');
    }
  };

  const addList = (movie) => {
    const line = {
      title: movie.Title,
      year: movie.Year,
      imdbID: movie.imdbID,
    };
    setLists([...lists, line]);
    setIsDisable((prevState) => ({ ...prevState, [movie.imdbID]: true }));
  };

  const removeList = (movie) => {
    setLists(lists.filter((list) => list.imdbID !== movie.imdbID));
    setIsDisable((prevState) => ({ ...prevState, [movie.imdbID]: false }));
  };

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=fringe&apikey=ba38c6d5`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      });
  }, []);

  useEffect(() => {
    if (search.trim() !== '') {
      fetch(`http://www.omdbapi.com/?s=${search}&apikey=ba38c6d5`)
        .then((res) => res.json())
        .then((data) => {
          if (data.Search) {
            setMovies(data.Search);
            console.log(data.Search);
            return
          }
          console.log("jhfb");
          setMovies('')
        })
        .catch((error) => {
          console.log(error);
          
        })
    }
  }, [search]);

  return (
    <div className={FilmStyle.filmWrapper}>
      <div className={FilmStyle.filmContainer}>
        <div className={FilmStyle.searchBarContainer}>
          <div className={FilmStyle.searchBar}>
            <input
              onChange={takeInput}
              value={inp}
              className={FilmStyle.input}
              type="text"
              placeholder="Write to search the movie"
            />
            <button onClick={searchInput} className={FilmStyle.button}>
              Search
            </button>
          </div>
        </div>
        <div className={FilmStyle.filmCardContainer}>
        {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.imdbID} className={FilmStyle.filmCard}>
                <div className={FilmStyle.card}>
                  <div className={FilmStyle.cardContent}>
                    <div className={FilmStyle.cardFilmImg}>
                      <img
                        className={FilmStyle.cardImg}
                        src={
                          movie.Poster !== 'N/A'
                            ? movie.Poster
                            : noPhoto
                        }
                        alt={movie.Title}
                      />
                    </div>
                    <div className={FilmStyle.cardFilmData}>
                      <h1 className={FilmStyle.cardFilmDataName}>
                        {movie.Title}, {movie.Year}
                      </h1>
                      <button
                        disabled={!!isDisable[movie.imdbID] || isListSaved}
                        onClick={() => addList(movie)}
                        className={FilmStyle.cardAddButton}
                      >
                        {isDisable[movie.imdbID] ? 'Added' : 'Add to favourite list'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={FilmStyle.noMoviesFound}>
              <h2>No movies found</h2>
            </div>
          )}
        </div>
      </div>
      <List movieName={lists} removeList={removeList} listName={listName} setListName={setListName} isListSaved={isListSaved} setIsListSaved={setIsListSaved}/>
    </div>
  );
};

export default Film;
