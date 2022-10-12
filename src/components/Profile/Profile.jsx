import React from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { REGEX_EMAIL } from '../../utils/constants'
import { changeUserInfo } from '../../utils/MainApi';
import { Validation } from '../../utils/Validation';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import './Profile.css'

function Profile(props) {
  const userInfo = React.useContext(UserContext);
  const [responceErr, setResponceErr] = React.useState('')
  const [isOpenTooltip, setIsOpenTooltip] = React.useState(false);
  const validate = Validation()
  const history = useHistory(); 
 
  function handleCloseTooltip() {setIsOpenTooltip(false)}
  
  function handleSubmit(e) {
    e.preventDefault();
    e.target.setAttribute('disabled', true);
    e.target.classList.add('profile__button-edit_disabled');
    changeUserInfo(validate.values.name, validate.values.email, localStorage.getItem('token'))
    .then(res => {
      props.onSubmit(res);
      setIsOpenTooltip(true);
    })
    .catch(err => {setResponceErr(`Ошибка регистрации пользователя: ${err}`)})
  }

  function handleSignOut() {
    localStorage.removeItem('token');
    props.onLogOut();
    history.push('/');
  }

  return ( 
    <main className='profile'>
      <h2 className='profile__greeting'>{`Привет, ${userInfo.name}!`}</h2>
      <form className='form profile__form' noValidate name='profile'>
        <label className='profile__label profile__label_type_underline'>Имя</label>
        <input className={validate.inputsValidity.name
          ? 'profile__input profile__input_type_underline'
          : 'profile__input profile__input_type_underline profile__input_type_error'} required type='text'
          name='name' value={validate.values.name} onChange={validate.handleChange} placeholder={userInfo.name}/>
        <span className='profile__message-error' name='nameError'>{validate.errors.nameError}</span> 
        <label  className='profile__label'>E-mail </label>
        <input className={validate.inputsValidity.email ? 'profile__input' : 'profile__input profile__input_type_error'} name='email'
        required type='text' pattern={REGEX_EMAIL} value={validate.values.email} onChange={validate.handleChange} placeholder={userInfo.email}/>
        <span className='profile__message-error' name='emailError'>{validate.errors.emailError}</span> 
        <span className='profile__response-err'>{responceErr}</span>
        <button className={(validate.formValidity && ((validate.values.name !== userInfo.name) || (validate.values.email !== userInfo.email)))
        ? 'button profile__button-edit' : 'button profile__button-edit profile__button-edit_disabled'}
         disabled={!validate.formValidity && ((validate.values.name !== userInfo.name) || (validate.values.email !== userInfo.email))}
         type='submit' onClick={handleSubmit}>Редактировать</button>
      </form>
      <button className='button profile__button-signout' type='button' onClick={handleSignOut}>Выйти из аккаунта</button>
      <InfoTooltip isOpen={isOpenTooltip} onClose={handleCloseTooltip}/>
    </main>
  )
}

export default Profile;
