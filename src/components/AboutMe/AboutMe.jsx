import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import photo from '../../images/about-me__photo.png';
import './AboutMe.css';


function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <h2 className='chapter-title'>Студентка</h2>
      <div className='about-me__profile'>
        <div className='about-me__data'>
          <div>
            <h3 className='about-me__name'>Lena Davy</h3>
            <p className='about-me__state'>Студентка Яндекс.Практикум, 35 лет</p>
            <p className='about-me__tale'>Я родилась и живу в Королёве, работаю юристом. Воспитываю дочь и собаку
             (с переменным успехом). Пройти курс веб-разработчика решила под влиянием ограничений пандемии,
              когда казалось, что социальная и профессиональная реализация теперь будут возможны только онлайн. Освоив
              неожиданную для себя компетенцию, признательна команде Яндекса за саму возможность и увлекательный опыт.
            </p>
          </div>
          <ul className='list about-me__list' aria-label='ссылки на соцсети'>
            <li className='about-me__item'><a className='link_color_white' href='https://t.me/LenaDavy' target='_blank' rel='noreferrer'>Telegram</a></li>
            <li className='about-me__item'><a className='link_color_white' href='https://github.com/LenaDavy' target='_blank' rel='noreferrer'>Github</a></li>
          </ul>
        </div>
        <img className='about-me__photo' src={photo} alt='Фотография'/>
      </div>
      <Portfolio/>
    </section>
  )
}

export default AboutMe;