import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='chapter-title'>О проекте</h2>
      <ul className='list about-project__list'>
        <li className='about-project__item-start'>
          <h3 className='about-project__title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className='about-project__item-last'>
          <h3 className='about-project__title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className='about-project__bar'>
        <p className='about-project__bar-text about-project__bar-text_type_start'>1 неделя</p>
        <p className='about-project__bar-text about-project__bar-text_type_last'>4 неделя</p>
        <p className='about-project__bar-text about-project__bar-text_type_tag'>Back-end</p>
        <p className='about-project__bar-text about-project__bar-text_type_tag'>Front-end</p>
      </div>
    </section>
  );
};

export default AboutProject;
