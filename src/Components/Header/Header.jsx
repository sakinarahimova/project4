import React from 'react'
import { NavLink , useLocation} from 'react-router-dom'
import HeaderStyle from './HeaderStyle.module.css'
import watchImg from './imagesHome/Screenshot 2024-12-19 001649.png'
import cinemasvg from './imagesHome/film-viewer-svgrepo-com.svg'
import cinemaImg from './imagesHome/movie-cinema-premiere-background_41737-251.jpeg'
const Header = () => {
    const location = useLocation();
  return (
    <div>
        <header>
            <div className={HeaderStyle.menu}>
                <img className={HeaderStyle.cinemaSvg} src={cinemasvg} alt="cinemaSvg" />
                <div>
                <NavLink className={HeaderStyle.nav} to='/'>Home</NavLink>
                <NavLink className={HeaderStyle.nav} to='/film' >Film</NavLink>
                </div>
            </div>
        </header>
        {location.pathname === '/' && (
        <main>
            <div className={HeaderStyle.container}>
                <div className={HeaderStyle.mainContent}>
                    <img className={HeaderStyle.img} src={cinemaImg} alt="cinemaImage" />
                    <div className={HeaderStyle.rightSide}>
                        <h1>ONLINE CINEMA</h1>
                        <p className={HeaderStyle.movietime}>MOVIE TIME</p>
                        <p>You are welcome to visit our webpage, where you can search for, discover, add movies to your favorites list, and enjoy watching the ones you love.</p>
                        <NavLink to='/film'>
                          <img className={HeaderStyle.watchImg} src={watchImg} alt="WatchNow" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </main>
        )}
    </div>
  )
}

export default Header