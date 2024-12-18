import React from 'react'
import MainMovieStyle from './MainMovie.module.css'
const MainMovie = () => {
  return (
    <div className={MainMovieStyle.wrapper}>
        <div className={MainMovieStyle.container}>
            <div className={MainMovieStyle.card}>
                <h1></h1>
                <div><img src="" alt="" /></div>
                <h5></h5>
            </div>
        </div>
    </div>
  )
}

export default MainMovie