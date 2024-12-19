import React from 'react'
import { NavLink , useLocation} from 'react-router-dom'
import HeaderStyle from './HeaderStyle.module.css'
import cinemasvg from './imagesHome/film-viewer-svgrepo-com.svg'
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
    </div>
  )
}

export default Header