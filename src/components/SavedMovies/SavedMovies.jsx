import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';

function SavedMovies() {
  const [checkboxPlight, setCheckboxPlight] = React.useState(false);
  const [checkboxState, setCheckboxState] = React.useState(false);

  function handleChangeCheckboxPlight() {
    !checkboxState && setCheckboxPlight(!checkboxPlight);
  }

  function handleSubmitSearchForm(event) {
    event.preventDefault();
    const filterCheckboxInput = document.querySelector('.filter-checkbox__input')
    filterCheckboxInput.setAttribute('disabled', true);
    setCheckboxState(true);
  }

  return(
    <main className='saved-movies'>
      <SearchForm onClick={handleSubmitSearchForm}/>
      <FilterCheckbox checkboxState={checkboxState} checkboxPlight = {checkboxPlight} onClick={handleChangeCheckboxPlight}/>
      <Preloader/>
      <MoviesCardList page='saved-movies'/>
    </main>
  )
} 

export default SavedMovies;
