import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  return (
    <section aria-label='ссылки на работы студента'>
      <h3 className='portfolio__heading'>Портфолио</h3>
      <ul className='list'>
        <li className='portfolio__external-link'>
          <p className='portfolio__text'>Статичный сайт</p>
          <Link className='link portfolio__link-arrow' to='https://github.com/LenaDavy/how-to-learn.git'/>
        </li>
        <li className='portfolio__external-link'>
          <p className='portfolio__text'>Адаптивный сайт</p>
          <Link className='link portfolio__link-arrow' to='https://lenadavy.github.io/russian-travel/'/>
        </li>
        <li className='portfolio__external-link'>
          <p className='portfolio__text'>Одностраничное приложение</p>
          <Link className='link portfolio__link-arrow' to='https://github.com/LenaDavy/react-mesto-api-full.git'/>
        </li>
      </ul>
    </section> 
  )
}

export default Portfolio;