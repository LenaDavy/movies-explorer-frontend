import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

function Movies() {
  const [checkboxPlight, setCheckboxPlight] = React.useState(false);
  const [checkboxState, setCheckboxState] = React.useState(false);

  function handleChangeCheckboxPlight() {
    !checkboxState && setCheckboxPlight(!checkboxPlight);
  }

  function handleSubmitSearchForm(event) {
    event.preventDefault();
    const filterCheckboxInput = document.querySelector('.filter-checkbox__input')
    const filterCheckboxToggle = document.querySelector('.filter-checkbox__toggle')
    filterCheckboxInput.setAttribute('disabled', true);
    filterCheckboxToggle.classList.add('filter-checkbox__toggle_disabled')
    setCheckboxState(true);
  }

  return(
    <main className='movies'>
      <SearchForm onClick={handleSubmitSearchForm}/>
      <FilterCheckbox checkboxState={checkboxState} checkboxPlight={checkboxPlight} onClick={handleChangeCheckboxPlight}/>
      <Preloader/>
      <MoviesCardList page='movies'/>
      <button className='button button_type_more movies__button-more' aria-label='дополнительные фильмы'>Ещё</button>
    </main>
  )
} 

export default Movies;
