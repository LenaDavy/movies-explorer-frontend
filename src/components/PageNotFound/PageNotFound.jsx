import React from 'react';
import { useHistory } from 'react-router-dom'; 
import './PageNotFound.css';

function PageNotFound() {
  const history = useHistory();

  function handleClickGoBack() {
    history.goBack()
  } 

  return (
    <main className='page-not-found'>
      <h2 className='page-not-found__error'>404</h2>
      <p className='page-not-found__text'>Страница не найдена</p>
      <button className='button link_color_blue page-not-found__button-go-back' onClick={handleClickGoBack}>назад</button>
    </main>
  )
}

export default PageNotFound;
