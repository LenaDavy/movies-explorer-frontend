import React from "react";
import './Footer.css';

function Footer() {
  return(
    <footer className='footer'>
      <h3 className='footer__descript'>Учебный проект Яндекс.Практикум x BeatFilm.</h3>
      <div className='footer__info'>
        <p className='footer__year'>&copy; 2022</p>
        <ul className='list footer__external-links' aria-label='ссылки на соцсети'>
          <li className='footer__external-link'><a href='https://practicum.yandex.ru/' className='link_color_white' target='_blank' rel='noreferrer'>Яндекс.Практикум</a></li>
          <li className='footer__external-link'><a href='https://github.com/LenaDavy' className='link_color_white' target='_blank' rel='noreferrer'>Github</a></li>
          <li className='footer__external-link'><a href='https://t.me/LenaDavy' className='link_color_white' target='_blank' rel='noreferrer'>Telegram</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;