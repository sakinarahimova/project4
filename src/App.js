import React , {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Film from './Components/Film/Film';
import SavedList from './Components/SavedList/SavedList';
import MainMovie from './Components/MainMovie/MainMovie';
import Header from './Components/Header/Header';
function App() {
  
  const [lists, setLists] = useState([]);
  const [isDisable, setIsDisable] = useState({});
  const [listName, setListName] = useState(''); 
  const [isListSaved, setIsListSaved] = useState(false); 
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Header/>} />
          <Route path="/film" element={<Film isDisable={isDisable} setIsDisable={setIsDisable} lists={lists} setLists={setLists } listName={listName} setListName={setListName} isListSaved={isListSaved} setIsListSaved={setIsListSaved}/>} />
          <Route path="/saved-list" element={<SavedList lists={lists} isListSaved={isListSaved} listName={listName}/>} />
          <Route path="/main-movie" element={<MainMovie />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
