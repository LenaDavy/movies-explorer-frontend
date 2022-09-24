import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <nav className='nav-tab'>
      <ul className='list nav-tab__list'>
        <li className='nav-tab__item' aria-label='к разделу о проекте'><a className='link_color_white nav-tab__link' href='#about-project'>О проекте</a></li>
        <li className='nav-tab__item' aria-label='к разделу технологий'><a className='link_color_white nav-tab__link' href='#techs'>Технологии</a></li>
        <li className='nav-tab__item' aria-label='к разделу о студенте'><a className='link_color_white nav-tab__link' href='#about-me'>Студент</a></li>
      </ul>
    </nav>
  )
}

export default NavTab;
