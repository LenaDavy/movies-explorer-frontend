import React from 'react';
import './SearchForm.css';

function SearchForm(props) {

  return(
    <form className='movies__search-form'>
        <input className='movies__search-bar'value={props.searchData} onChange={props.onChange}
        name='search-bar' type='text' min='1' placeholder='Фильм' aria-label='поле ввода для поиска фильмов' required/>
        <button className='button button_type_search' type='submit' onClick={props.onClick}/>
      </form>
  )
}

export default SearchForm;
