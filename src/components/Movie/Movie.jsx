import React from 'react';
import { UserContext } from '../contexts/UserContext';
import { PICTURE_URL, convertDuration } from '../../utils/constants';
import { saveMovie, deleteMovie } from '../../utils/MainApi';
import './Movie.css';

function Movie(props) {
  const userInfo = React.useContext(UserContext);
  let stateMovie = false;

  if (props.page === 'movies') {
    let userMovies = localStorage.getItem('userMovies');
    (userMovies !== null) && (userMovies = JSON.parse(userMovies));
    (userMovies.length > 0) && (stateMovie = userMovies.some(function(item) {return item.movieId === props.movie.id}))
  }
  
  function handleClickLikeButton() {
    if (stateMovie) {
      deleteMovie(props.movie.id, userInfo.token)
      .then((res) => {props.onClick(false, res)})
      .catch(err => {console.log(`Ошибка удаления фильма: ${err}`)})
    } else {
      saveMovie(props.movie, userInfo.token)
      .then((res) => {props.onClick(true, res)})
      .catch(err => {console.log(`Ошибка сохранения фильма: ${err}`)})
    }
  }

  function handleClickDeleteButton() {
    deleteMovie(props.movieId, userInfo.token)
    .then((res) => {props.onClick(res)})
    .catch(err => {console.log(`Ошибка удаления фильма: ${err}`)})
  }

  return(
    <li className='movie'>
      <a href={props.movie.trailerLink} target='_blank' rel="noreferrer">
        <img className='movie__preview' src={PICTURE_URL + (props.movie.image.url || props.movie.image) } alt='превью фильма'/>
      </a>
      <div className='movie__description'> 
        <h2 className='movie__title'>{props.nameRU}</h2>
        {props.page === 'movies'
          ? <button className={stateMovie ? 'button movie__button movie__button_type_like-active' : 'button movie__button'}
            type='button' aria-label='добавить фильм в сохраненные' onClick={handleClickLikeButton}/> 
          : <button className='button movie__button movie__button_type_delete' type='button'
            aria-label='удалить фильм из сохраненных' onClick={handleClickDeleteButton}/>
        }
      </div> 
      <div className='movie__duration'>{convertDuration(props.duration)}</div>
    </li>
    )
   } 
   
   export default Movie;