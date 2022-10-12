import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { getInitialMovies } from '../../utils/MoviesApi';
import { getUserMovies } from '../../utils/MainApi';
import { SHORT_DURATION, filterByQuery, renderParams } from '../../utils/constants';
import './Movies.css';

function Movies() {
  const [initialMovies, setInitialMovies] = React.useState([]);
  const [searchData, setSearchData] = React.useState('')
  const [preloaderState, setPreloaderState] = React.useState(false);
  const [filterCheckboxPlight, setFilterCheckboxPlight] = React.useState(false);
  const [resultMessage, setResultMessage] = React.useState('')
  const [queryState, setQueryState] = React.useState(false);
  const [buttonMoreState, setButtonMoreState] = React.useState(false);
  const [displayMovies, setDisplayMovies] = React.useState([]);
  const [adaptedMovies, setAdaptedMovies] = React.useState([]);
  const windowWidth = window.innerWidth;


  React.useEffect(() => {
    let beatSearch = localStorage.getItem('beatSearch');
    let beatCheckbox = localStorage.getItem('beatCheckbox');
    let beatMovies = localStorage.getItem('initialMovies');
    let beatQuery = localStorage.getItem('beatQuery');

    (beatSearch !== null) && setSearchData(JSON.parse(beatSearch));
    (beatCheckbox !== null) && setFilterCheckboxPlight(JSON.parse(beatCheckbox));
    (beatMovies !== null) && setInitialMovies(JSON.parse(beatMovies));
    (beatQuery !== null) && setQueryState(JSON.parse(beatQuery));

    getUserMovies(localStorage.getItem('token'))
    .then((savedMovies) => {localStorage.setItem('userMovies', JSON.stringify(savedMovies.movies))})
    .catch((err) => { console.log(`Ошибка загрузки фильмов: ${err}`);
      setQueryState(true);
      setResultMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.')
  })
  }, []);

  React.useEffect(() => {
    const searchArray = filterByQuery(searchData, initialMovies);
    if (filterCheckboxPlight) {
      const shortArray = searchArray.filter(movie => movie.duration <= SHORT_DURATION);
      setDisplayMovies(shortArray);
    } else { setDisplayMovies(searchArray)}
  },[initialMovies, filterCheckboxPlight]);
  

  React.useEffect(() => {
    if (displayMovies.length === 0) {
      setResultMessage('Ничего не найдено');
      setAdaptedMovies([]);
      setButtonMoreState(false);
    } else {
      const params = renderParams(windowWidth);
      let filmsNumber = localStorage.getItem('filmsNumber');
      if (filmsNumber <= 0) {
        setAdaptedMovies(displayMovies.slice(0, params.start));
        localStorage.setItem('filmsNumber', JSON.stringify(params.start));
      } else {setAdaptedMovies(displayMovies.slice(0, filmsNumber))}
      setResultMessage('');
      setButtonMoreState(true);
    }
  }, [displayMovies, windowWidth]);

  React.useEffect(() => {
  (adaptedMovies.length >= displayMovies.length) && setButtonMoreState(false);
  }, [adaptedMovies]);

  function handleChangeSearchData(e) {setSearchData(e.target.value)}

  function handleChangeCheckboxPlight() {
    setFilterCheckboxPlight(!filterCheckboxPlight);
    localStorage.setItem('beatCheckbox', JSON.stringify(!filterCheckboxPlight))
  }

  function handleSubmitMoviesSearch(e) {
    e.preventDefault();
    const searchValidity = e.target.previousElementSibling.checkValidity()
    if (searchValidity) {
      e.target.setAttribute('disabled', true);
      e.target.classList.add('button_type_search_disabled');
      setPreloaderState(true)
      localStorage.setItem('beatSearch', JSON.stringify(searchData));
      localStorage.setItem('beatCheckbox', JSON.stringify(filterCheckboxPlight));
      
      if (queryState) {setInitialMovies(JSON.parse(localStorage.getItem('initialMovies')))}
      else { getInitialMovies()
        .then((initialMovies) => {
          localStorage.setItem('initialMovies', JSON.stringify(initialMovies));
          setInitialMovies(initialMovies);
          setQueryState(true);
        })
        .catch((err) => {console.log(`Ошибка загрузки фильмов: ${err}`);
          setPreloaderState(false);
          setDisplayMovies([]);
          setButtonMoreState(false);
          e.target.removeAttribute('disabled', true);
          e.target.classList.remove('button_type_search_disabled');
          setResultMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.')
        })
      }
      localStorage.setItem('queryState', JSON.stringify(true));
      localStorage.setItem('filmsNumber', JSON.stringify(0));
      setPreloaderState(false);
      e.target.removeAttribute('disabled', true);
      e.target.classList.remove('button_type_search_disabled');
    } else {e.target.previousElementSibling.setAttribute('placeholder', 'Нужно ввести ключевое слово')}
  };

  function handleClickMoreMovies() {
    const params = renderParams(windowWidth)
    let filmsNumber = JSON.parse(localStorage.getItem('filmsNumber'));
    let currentValue = (filmsNumber + params.more);
    ((displayMovies.length - filmsNumber) <= 3 ) && (currentValue = displayMovies.length)
    localStorage.setItem('filmsNumber', JSON.stringify(currentValue));
    const addedMovies = displayMovies.slice(0, currentValue);
      setAdaptedMovies(addedMovies);
  
  } 

  function handleChangeUserMovie(action, movie) {
    let keptArr = JSON.parse(localStorage.getItem('userMovies'));
    let beatMovies = JSON.parse(localStorage.getItem('initialMovies'));

    if (action) {
      keptArr.push(movie.newMovie);
      localStorage.setItem('userMovies', JSON.stringify(keptArr))
      setInitialMovies(beatMovies);
    } else {
      keptArr = keptArr.filter(function(item) { return item.movieId !== movie.movie.movieId})
      localStorage.setItem('userMovies', JSON.stringify(keptArr))
      setInitialMovies(beatMovies);
    }
  }

  return(
    <main className='movies'>
      <SearchForm searchData={searchData} onClick={handleSubmitMoviesSearch} onChange={handleChangeSearchData}/>
      <FilterCheckbox onClick={handleChangeCheckboxPlight} filterCheckboxPlight={filterCheckboxPlight}/>
      <span className={queryState ? 'movies__message' : 'movies__message_hide'}>{resultMessage}</span>
      <Preloader state={preloaderState}/>
      <MoviesCardList page='movies' displayMovies={adaptedMovies} onClick={handleChangeUserMovie}/>
      <button className={buttonMoreState ?'button button_type_more movies__button-more' : 'button_type_more_hide'}
        aria-label='дополнительные фильмы' onClick={handleClickMoreMovies}>Ещё</button>
    </main>
  )
} 

export default Movies;
