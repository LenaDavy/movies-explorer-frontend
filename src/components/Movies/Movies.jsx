import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

function Movies() {
  return(
    <main className='movies'>
      <SearchForm/>
      <FilterCheckbox/>
      <Preloader/>
      <MoviesCardList page='movies'/>
      <button className='button button_type_more movies__button-more' aria-label='дополнительные фильмы'>Ещё</button>
    </main>
  )
} 

export default Movies;
