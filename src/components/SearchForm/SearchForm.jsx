import React from 'react';
import './SearchForm.css';

function SearchForm(props) {
  return(
    <form className='movies__search-form'>
        <input className='movies__search-bar' name='search-bar' type='text' min='1' placeholder='Фильм' aria-label='поле ввода для поиска фильмов' required/>
        <button className='button button_type_search' type='button' onClick={props.submitBtn}/>
      </form>
  )
}

export default SearchForm;
