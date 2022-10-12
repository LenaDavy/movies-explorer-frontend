import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
  return(
    <section className={props.isOpen ? 'navigation' : 'navigation_hidden'}>
      <div className='navigation__content-area'>
        <button className='button button_type_close navigation__button-close' onClick={props.onClick} type='button'/>
        <nav className='navigation__links-area'>
          <ul className='list navigation__list'>
            <li className='navigation__item'><NavLink exact to='/' className='link_color_white navigation__link-common' activeClassName='navigation__link-common_active'>Главная</NavLink></li>
            <li className='navigation__item'><NavLink to='/movies' className='link_color_white navigation__link-common' activeClassName='navigation__link-common_active'>Фильмы</NavLink></li>
            <li className='navigation__item'><NavLink to='/saved-movies' className='link_color_white navigation__link-common' activeClassName='navigation__link-common_active'>Сохранённые фильмы</NavLink></li>
          </ul>
          <Link to='/profile' className='link_color_white link_type_account navigation__link-account'>Аккаунт</Link>
        </nav>
      </div>
    </section>
  )
}

export default Navigation;
