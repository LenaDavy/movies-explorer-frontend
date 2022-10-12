import React from 'react';
import { Link } from 'react-router-dom';
import { REGEX_EMAIL } from '../../utils/constants'
import './IdentityForm.css'

function IdentityForm(props) {
  
  return ( 
    <main className='identity'>
      <Link to='/' className='link_color_white link_type_logo identity__link-logo' aria-label='переход на стартовую страницу'/>
      <h2 className='identity__greeting'>{props.greeting}</h2>
      <form className='form identity__form' noValidate name={`identity__form_type_${props.name}`}>
        <fieldset className='identity__account-data'>
          {props.children}
          <label  className='identity__label'>E-mail
            <input className={props.validate.inputsValidity.email
              ? 'identity__input' : 'identity__input identity__input_type_error'
              } required type='email' name='email' pattern={REGEX_EMAIL} value={props.validate.values.email} onChange={props.validate.handleChange}/>
            <span className='identity__message-error' name='emailError'>{props.validate.errors.emailError}</span>
          </label>
          <label  className='identity__label'>Пароль
            <input className={props.validate.inputsValidity.password
              ? 'identity__input' : 'identity__input identity__input_type_error'
              } required type='password' name='password' value={props.validate.values.password} onChange={props.validate.handleChange}/>
            <span className='identity__message-error' name='passwordError'>{props.validate.errors.passwordError}</span>
          </label>
        </fieldset>
        <span className='identity__response-err'>{props.responceErr}</span>
        <button className={props.validate.formValidity
          ? 'button button_type_form-submit'
          : 'button button_type_form-submit button_type_form-submit_disabled'
          } type='submit' disabled={!props.validate.formValidity} onClick={props.onSubmit}>{props.buttonText}
        </button>
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
