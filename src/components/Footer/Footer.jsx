import React from "react";
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return(
    <footer className='footer'>
      <h3 className='footer__descript'>Учебный проект Яндекс.Практикум x BeatFilm.</h3>
      <div className='footer__info'>
        <p className='footer__year'>&copy; 2022</p>
        <ul className='list footer__external-links' aria-label='ссылки на соцсети'>
          <li className='footer__external-link'><Link to='https://practicum.yandex.ru/' className='link_color_white'>Яндекс.Практикум</Link></li>
          <li className='footer__external-link'><Link to='https://github.com/LenaDavy' className='link_color_white'>Github</Link></li>
          <li className='footer__external-link'><Link to='https://t.me/LenaDavy' className='link_color_white'>Telegram</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;