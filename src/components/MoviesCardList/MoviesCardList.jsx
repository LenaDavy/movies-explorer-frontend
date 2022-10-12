import React from 'react';
import Movie from '../Movie/Movie';
import './MoviesCardList.css';

function MoviesCardList(props) {

  return (
    <ul className='list movies__card-list'>
      {props.displayMovies.map((movie) => {
       return <Movie key={movie.id || movie._id} page={props.page} movie={movie} onClick={props.onClick} {...movie}/>})}
    </ul>
  )
}

export default MoviesCardList;
