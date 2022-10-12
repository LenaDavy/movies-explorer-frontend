import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { getUserMovies } from '../../utils/MainApi';
import { SHORT_DURATION, filterByQuery } from '../../utils/constants';
import './SavedMovies.css';

function SavedMovies() {
  const [userMovies, setUserMovies] = React.useState([]);
  const [searchData, setSearchData] = React.useState('');
  const [filterCheckboxPlight, setFilterCheckboxPlight] = React.useState(false);
  const [resultMessage, setResultMessage] = React.useState('');
  const [displayMovies, setDisplayMovies] = React.useState([]);

  React.useEffect(() => {
    getUserMovies(localStorage.getItem('token'))
    .then((savedMovies) => {setUserMovies(savedMovies.movies)})
    .catch((err) => { console.log(`Ошибка загрузки фильмов: ${err}`);
      setResultMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.')
    })
  },[]);

  React.useEffect(() => {
    const searchArray = filterByQuery(searchData, userMovies);
    if (filterCheckboxPlight) {
      const shortArray = searchArray.filter(movie => movie.duration <= 40);
      setDisplayMovies(shortArray);
    } else { setDisplayMovies(searchArray)}
  },[userMovies, filterCheckboxPlight]);
  
  React.useEffect(() => {
    if (displayMovies.length === 0) {setResultMessage('Ничего не найдено')}
    else {setResultMessage('')}
  },[displayMovies]);

  function handleChangeSearchData(e) {setSearchData(e.target.value)};
  function handleChangeCheckboxPlight() {setFilterCheckboxPlight(!filterCheckboxPlight)};

  function handleSubmitSearch(e) {
    e.preventDefault();
    const searchValidity = e.target.previousElementSibling.checkValidity()
    if (!searchValidity) {
      e.target.previousElementSibling.setAttribute('placeholder', 'Нужно ввести ключевое слово')
    } else {
      const searchArray = filterByQuery(searchData, userMovies);
      if (filterCheckboxPlight) {setDisplayMovies(searchArray.filter(movie => movie.duration <= SHORT_DURATION))}
      else {setDisplayMovies(searchArray)} 
    }
  };

  function handleClickDeleteMovie(movie) {
    const editedArr = displayMovies.filter(function(item) { return item.movieId !== movie.movie.movieId})
    setDisplayMovies(editedArr);
  }

  return(
    <main className='saved-movies'>
      <SearchForm searchData={searchData} onChange={handleChangeSearchData} onClick={handleSubmitSearch} />
      <FilterCheckbox filterCheckboxPlight={filterCheckboxPlight} onClick={handleChangeCheckboxPlight}/>
      <span className='saved-movies__message'>{resultMessage}</span>
      <MoviesCardList page='saved-movies' displayMovies={displayMovies} onClick={handleClickDeleteMovie}/>
    </main>
  )
} 

export default SavedMovies;
