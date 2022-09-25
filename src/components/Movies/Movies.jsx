import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

function Movies() {
  const [checkboxPlight, setCheckboxPlight] = React.useState(false);

  function handleChangeCheckboxPlight() {
    setCheckboxPlight(!checkboxPlight);
  }

  return(
    <main className='movies'>
      <SearchForm/>
      <FilterCheckbox checkboxPlight = {checkboxPlight} onClick={handleChangeCheckboxPlight}/>
      <Preloader/>
      <MoviesCardList page='movies'/>
      <button className='button button_type_more movies__button-more' aria-label='дополнительные фильмы'>Ещё</button>
    </main>
  )
} 

export default Movies;
