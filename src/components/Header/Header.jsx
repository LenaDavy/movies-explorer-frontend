import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header(props) {
  return(
    <header> 
      <div className={props.isLogged ? 'header_hide' : 'header'}>
        <div className='link_type_logo header__link-logo' aria-label='логотип'/>
        <nav>
          <ul className='list header__list'>
            <li className='header__registration' aria-label='переход на страницу регистрации'><Link to='/signup' className='link_color_white'>Регистрация</Link></li>
            <li className='header__signin' aria-label='переход на страницу авторизации'><Link to='/signin' className='link_color_black'>Войти</Link></li>
          </ul>
        </nav>  
      </div>
      <div className={props.isLogged ? 'header' : 'header_hide'}>
        <nav className='header__navigation-area'>
          <Link to='/' className='link_color_white link_type_logo' aria-label='переход на стартовую страницу'/>
          <ul className='list header__movies-area'>
            <li className='header__item' aria-label='переход на страницу фильмов'><NavLink to='/movies' className='link_color_white header__link-auth' activeClassName='header__link-auth_active'>Фильмы</NavLink></li>
            <li aria-label='переход к сохраненным фильмам'><NavLink to='/saved-movies' className='link_color_white header__link-auth' activeClassName='header__link-auth_active'>Сохранённые фильмы</NavLink></li>
          </ul>
          <Link to='/profile' className='link_color_white link_type_account header__link-account' aria-label='переход к редактированию профиля'>Аккаунт</Link>
        </nav>
        <button className='button button_type_menu' aria-label='открыть навигацию' onClick={props.onClick} type='button'/>
      </div>
    </header>
  )
}

export default Header;
