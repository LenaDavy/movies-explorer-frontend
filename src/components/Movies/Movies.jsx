import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { getInitialMovies } from '../../utils/MoviesApi';
import { getUserMovies } from '../../utils/MainApi';
import { filterByQuery, renderParams } from '../../utils/constants';
import './Movies.css';

function Movies() {
  const [initialMovies, setInitialMovies] = React.useState([]);
  const [searchData, setSearchData] = React.useState('')
  const [preloaderState, setPreloaderState] = React.useState(false);
  const [filterCheckboxPlight, setFilterCheckboxPlight] = React.useState(false);
  const [resultMessage, setResultMessage] = React.useState('')
  const [messageVisible, setMessageVisible] = React.useState(false);
  const [buttonMoreState, setButtonMoreState] = React.useState(false);
  const [displayMovies, setDisplayMovies] = React.useState([]);
  const [adaptedMovies, setAdaptedMovies] = React.useState([]);
  const windowWidth = window.innerWidth;


  React.useEffect(() => {
    let beatSearch = localStorage.getItem('beatSearch');
    let beatCheckbox = localStorage.getItem('beatCheckbox');
    let beatMovies = localStorage.getItem('initialMovies');
    let beatMessage = localStorage.getItem('beatMessage');

    (beatSearch !== null) && setSearchData(JSON.parse(beatSearch));
    (beatCheckbox !== null) && setFilterCheckboxPlight(JSON.parse(beatCheckbox));
    (beatMovies !== null) && setInitialMovies(JSON.parse(beatMovies));
    (beatMessage !== null) && setMessageVisible(JSON.parse(beatMessage));

    getUserMovies(localStorage.getItem('token'))
    .then((savedMovies) => {localStorage.setItem('userMovies', JSON.stringify(savedMovies.movies))})
    .catch((err) => { console.log(`Ошибка загрузки фильмов: ${err}`);
      setMessageVisible(true);
      setResultMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.')
  })
  }, []);

  React.useEffect(() => {
    const searchArray = filterByQuery(searchData, initialMovies);
    if (filterCheckboxPlight) {
      const shortArray = searchArray.filter(movie => movie.duration <= 40);
      setDisplayMovies(shortArray);
    } else { setDisplayMovies(searchArray)}
  },[initialMovies, filterCheckboxPlight]);
  

  React.useEffect(() => {
    if (displayMovies.length === 0) {
      setResultMessage('Ничего не найдено');
      setAdaptedMovies([])
      setButtonMoreState(false);
    } else {
      setResultMessage('')
      const params = renderParams(windowWidth)
      setAdaptedMovies(displayMovies.slice(0, params.start));
      setButtonMoreState(true);
    }
  }, [displayMovies, windowWidth]);

  function handleChangeSearchData(e) {setSearchData(e.target.value)}

  function handleChangeCheckboxPlight() {
    setFilterCheckboxPlight(!filterCheckboxPlight);
    localStorage.setItem('beatCheckbox', JSON.stringify(!filterCheckboxPlight))
  }

  function handleSubmitMoviesSearch(e) {
    e.preventDefault();
    const searchValidity = e.target.previousElementSibling.checkValidity()
    if (searchValidity) {
      setPreloaderState(true)
      localStorage.setItem('beatSearch', JSON.stringify(searchData));
      localStorage.setItem('beatCheckbox', JSON.stringify(filterCheckboxPlight));

      getInitialMovies()
      .then((initialMovies) => {
        localStorage.setItem('initialMovies', JSON.stringify(initialMovies));
        setInitialMovies(initialMovies);
        setMessageVisible(true);
        localStorage.setItem('beatMessage', JSON.stringify(true));
        setPreloaderState(false);
      })
      .catch((err) => {console.log(`Ошибка загрузки фильмов: ${err}`);
        setPreloaderState(false);
        setDisplayMovies([]);
        setButtonMoreState(false);
        setResultMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.')
      })
    } else {e.target.previousElementSibling.setAttribute('placeholder', 'Нужно ввести ключевое слово')}
  };

  function handleClickMoreMovies() {
    const params = renderParams(windowWidth)
    const currentValue = (adaptedMovies.length + params.more);
    
    if (displayMovies.length > currentValue) {
      const addedMovies = displayMovies.filter(function(item, i) { return i < currentValue});
      setAdaptedMovies(addedMovies);
    }
  } 

  function handleChangeUserMovie(action, movie) {
    let keptArr = JSON.parse(localStorage.getItem('userMovies'));

    if (action) {
    keptArr.push(movie.newMovie);
    localStorage.setItem('userMovies', JSON.stringify(keptArr))
    setDisplayMovies(adaptedMovies);
    } else {
      keptArr = keptArr.filter(function(item) { return item.movieId !== movie.movie.movieId})
      localStorage.setItem('userMovies', JSON.stringify(keptArr))
      setDisplayMovies(adaptedMovies)
    }
  }

  return(
    <main className='movies'>
      <SearchForm searchData={searchData} onClick={handleSubmitMoviesSearch} onChange={handleChangeSearchData}/>
      <FilterCheckbox onClick={handleChangeCheckboxPlight} filterCheckboxPlight={filterCheckboxPlight}/>
      <span className={messageVisible ? 'movies__message' : 'movies__message_hide'}>{resultMessage}</span>
      <Preloader state={preloaderState}/>
      <MoviesCardList page='movies' displayMovies={adaptedMovies} onClick={handleChangeUserMovie}/>
      <button className={buttonMoreState ?'button button_type_more movies__button-more' : 'button_type_more_hide'}
        aria-label='дополнительные фильмы' onClick={handleClickMoreMovies}>Ещё</button>
    </main>
  )
} 

export default Movies;
