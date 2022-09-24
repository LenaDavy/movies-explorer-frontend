import React from 'react';
import Movie from '../Movie/Movie';
import './MoviesCardList.css';
import {moviesBase} from '../../utils/constants';

function MoviesCardList(props) {

  return (
    <ul className='list movies__card-list'>
      {moviesBase.map((movie) => {return <Movie key={movie._id} page={props.page} {...movie}/>})}
    </ul>
  )
}

export default MoviesCardList;