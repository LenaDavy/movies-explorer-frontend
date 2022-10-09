import React from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { changeUserInfo } from '../../utils/MainApi';
import { Validation } from '../../utils/Validation';
import './Profile.css'

function Profile(props) {
  const userInfo = React.useContext(UserContext);
  const [responceErr, setResponceErr] = React.useState('')
  const validate = Validation()
  const history = useHistory(); 
 
  function handleSubmit(e) {
    e.preventDefault();
    if ((validate.values.name !== userInfo.name) && validate.values.email !== userInfo.email)
    { changeUserInfo(validate.values.name, validate.values.email, userInfo.token)
      .then((res) => {props.onSubmit({name: res.name, email: res.email, _id: res._id})})
      .catch(err => {setResponceErr(`Ошибка регистрации пользователя: ${err}`)})
    }
  }

  function handleSignOut(e) {
    e.preventDefault()
    localStorage.removeItem('token');
    history.push('/');
  }

  return ( 
    <main className='profile'>
      <h2 className='profile__greeting'>{`Привет, ${userInfo.name}!`}</h2>
      <form className='form profile__form' noValidate name='profile'>
        <label className='profile__label profile__label_type_underline'>Имя</label>
        <input className={validate.inputsValidity.name
          ? 'profile__input profile__input_type_underline' : 'profile__input profile__input_type_error'
          } required type='text' name='name' value={validate.values.name} onChange={validate.handleChange} placeholder={userInfo.name}/>
        <span className='profile__message-error' name='nameError'>{validate.errors.nameError}</span> 
        <label  className='profile__label'>E-mail </label>
        <input className='profile__input' required type='email' name='email'
          value={validate.values.email} onChange={validate.handleChange} placeholder={userInfo.email}/>
        <span className='profile__message-error' name='emailError'>{validate.errors.emailError}</span> 
        <span className='profile__response-err'>{responceErr}</span>
        <button className='button profile__button-edit' type='button' onClick={handleSubmit}>Редактировать</button>
      </form>
      <button className='button profile__button-signout' onClick={handleSignOut}>Выйти из аккаунта</button>
    </main>
  )
}

export default Profile;
