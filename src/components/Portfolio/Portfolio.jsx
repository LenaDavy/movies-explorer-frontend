import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section aria-label='ссылки на работы студента'>
      <h3 className='portfolio__heading'>Портфолио</h3>
      <ul className='list'>
        <li className='portfolio__external-link'>
          <a className='link_color_white link_type_arrow' href='https://github.com/LenaDavy/how-to-learn.git' target='_blank' rel='noreferrer'>Статичный сайт</a>
        </li>
        <li className='portfolio__external-link'>
          <a className='link_color_white link_type_arrow' href='https://lenadavy.github.io/russian-travel/' target='_blank' rel='noreferrer'>Адаптивный сайт</a>
        </li>
        <li className='portfolio__external-link'>
          <a className='link_color_white link_type_arrow' href='https://github.com/LenaDavy/react-mesto-api-full.git' target='_blank' rel='noreferrer'>Одностраничное приложение</a>
        </li>
      </ul>
    </section> 
  )
}

export default Portfolio;
