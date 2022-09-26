import React from 'react';
import './Movie.css';

function Movie(props) {
  return(
    <li className='movie'>
      <img className='movie__preview' src={props.preview} alt='превью фильма'/>
      <div className='movie__description'> 
        <h2 className='movie__title'>{props.title}</h2>
        {props.page === 'movies'
          ? <button className='button movie__button movie__button_type_like-active' type='button' aria-label='добавить фильм в сохраненные'/> 
          : <button className='button movie__button movie__button_type_delete' type='button' aria-label='удалить фильм из сохраненных'/>
        }
      </div> 
      <div className='movie__duration'>{props.duration}</div>
    </li>
    )
   } 
   
   export default Movie;