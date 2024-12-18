import React from 'react'
import savedListStyle from './SavedList.module.css'
import { useLocation , useNavigate} from 'react-router-dom'
// import List from '../List/List';
const SavedList = ({lists , listName}) => {
    // const location = useLocation()
    const navigate = useNavigate();
    // const { listName, movies } = location.state || {}
    const goBack = () =>{
        navigate(-1)
    }
  return (
    <div className={savedListStyle.wrapper}>
        <div className={savedListStyle.container}>
            <button className={savedListStyle.goBack} onClick={goBack}>Go Back</button>
            <div className={savedListStyle.headingContainer}>
                <h1 className={savedListStyle.heading}>{listName}</h1>
            </div>
            <div className={savedListStyle.lineContainer}>
                {lists.map((movie ,i) => (
                    <div className={savedListStyle.line} key={i}>
                        <h5>{movie.title}, {movie.year}</h5>
                        <a className={savedListStyle.watchMovie} href={`https://www.imdb.com/title/${movie.imdbID}/?ref_=fn_all_ttl_1`} target="_blank" rel="noopener noreferrer">Go to watch movie</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default SavedList