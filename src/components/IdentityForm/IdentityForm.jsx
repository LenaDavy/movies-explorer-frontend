import React from 'react';
import { Link } from 'react-router-dom';
import './IdentityForm.css'

function IdentityForm(props) {
  return ( 
    <main className='identity'>
      <Link to='/' className='link_color_white link_type_logo identity__link-logo' aria-label='переход на стартовую страницу'/>
      <h2 className='identity__greeting'>{props.greeting}</h2>
      <form className='identity__form' noValidate name={`identity__form_type_${props.name}`}>
        <fieldset className='identity__account-data'>
          <label  className={props.name === 'signup' ?'identity__label' : 'identity__label_hide'}>Имя
            <input className='identity__input' required type='text' name='name' placeholder='Виталий'/>
            <p className='identity__message-error' name='nameError'/>
          </label>
          <label  className='identity__label'>E-mail
            <input className='identity__input' required type='text' name='email' placeholder='pochta@yandex.ru'/>
            <p className='identity__message-error' name='emailError'/>
          </label>
          <label  className='identity__label'>Пароль
            <input className='identity__input identity__input_type_error' required type='password' name='password'/>
             <p className='identity__message-error' name='passwordError'>Что-то пошло не так...</p>
          </label>
        </fieldset>
        <button className='button button_type_form-submit' type='button'>{props.buttonText}</button>
      </form>
      {props.name === 'signup'
        ? <p className='identity__text'>Уже зарегистрированы?
          <Link to='/signin' className='link_color_blue'>&nbsp; Войти</Link>
        </p>
        : <p className='identity__text'>Ещё не зарегистрированы?
          <Link to='/signup' className='link_color_blue'>&nbsp; Регистрация</Link>
        </p>
      }
    </main>
  )
}

export default IdentityForm;
