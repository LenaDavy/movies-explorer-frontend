import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <h2 className='chapter-title chapter-title__techs'>Технологии</h2>
      <h3 className='techs__heading'>7 технологий</h3>
      <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='list techs__list'>
        <li className='techs__item'><p className='techs__item-text'>HTML</p></li>
        <li className='techs__item'><p className='techs__item-text'>CSS</p></li>
        <li className='techs__item'><p className='techs__item-text'>JS</p></li>
        <li className='techs__item'><p className='techs__item-text'>React</p></li>
        <li className='techs__item'><p className='techs__item-text'>Git</p></li>
        <li className='techs__item'><p className='techs__item-text'>Express.js</p></li>
        <li className='techs__item'><p className='techs__item-text'>MongoDB</p></li>
      </ul>
    </section>
  )
}

export default Techs;