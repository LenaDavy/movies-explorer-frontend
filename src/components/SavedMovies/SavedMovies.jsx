import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';

function SavedMovies() {
  const [checkboxPlight, setCheckboxPlight] = React.useState(false);

  function handleChangeCheckboxPlight() {
    setCheckboxPlight(!checkboxPlight);
  }

  return(
    <main className='saved-movies'>
      <SearchForm/>
      <FilterCheckbox checkboxPlight = {checkboxPlight} onClick={handleChangeCheckboxPlight}/>
      <Preloader/>
      <MoviesCardList page='saved-movies'/>
    </main>
  )
} 

export default SavedMovies;
