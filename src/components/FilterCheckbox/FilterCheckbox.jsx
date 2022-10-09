import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <label className='filter-checkbox'>
      <input className='filter-checkbox__input' type='checkbox' aria-label='фильтр коротких фльмов'/>
      <div className={props.filterCheckboxPlight ? 'filter-checkbox__toggle filter-checkbox__toggle_active' : 'filter-checkbox__toggle'} onClick={props.onClick}/>
      <h3 className='filter-checkbox__title'>Короткометражки</h3>
    </label>
  )
}

export default FilterCheckbox;
