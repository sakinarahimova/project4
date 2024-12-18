import React from 'react'
import ListStyle from './List.module.css'
import xSign from './cross.png'
import { useState } from 'react'
import MainMovie from '../MainMovie/MainMovie'
import { NavLink } from 'react-router-dom'; 
const List = ({movieName , removeList , setListName , listName , isListSaved, setIsListSaved}) => {
  const [name , setName] = useState('')
  const takeListName = (e) =>{
    setName(e.target.value)
  }
  const saveListName = () => {
    if (name.trim() && movieName.length > 0) {
        setListName(name);
        setIsListSaved(true);
    }
};
  const resetListName = () => {
    setListName('')
    setIsListSaved(false)
  }
  return (
    <div className={ListStyle.listContainer}>
      <div className={ListStyle.listName}>
        <input onChange={takeListName} className={ListStyle.listNameInput} value={name ? name:listName} type="text" name="" id="" placeholder='NEW LIST' disabled={isListSaved}/>
      </div>
      {movieName.map((movie,i) => (
              <div key={i} className={ListStyle.list}>
                <div className={ListStyle.line}>
                  <h1 className={ListStyle.heading}>{movie.title}, {movie.year}</h1>
                  <button disabled={isListSaved} onClick={() => removeList(movie)} className={ListStyle.xButton}>
                    <img className={ListStyle.xSign} src={xSign} alt="" />
                  </button>
                </div>
              </div>
          ))}
      <div className={ListStyle.listAdd}>
        <button onClick={saveListName} className={ListStyle.listAddButton}>Save to list</button>
      </div>
      <div className={ListStyle.footer}>
      {isListSaved && listName && (
        <div className={ListStyle.link}>
          <NavLink 
            to="/saved-list" 
            // state={{ listName: listName, movies: movieName }}
            className={ListStyle.navLink}
          >
            Go to Saved List
          </NavLink>
        </div>
      )}
      {isListSaved && (
        <button onClick={resetListName} className={ListStyle.resetButton}>
          Reset List
        </button>
      )}
      </div>
    </div>
  )
}

export default List