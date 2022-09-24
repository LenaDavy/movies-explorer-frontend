import React from 'react';
import './Profile.css'

function Profile() {


  return ( 
    <main className='profile'>
      <h2 className='profile__greeting'>Привет, Виталий!</h2>
      <form className='profile__form' noValidate name='profile'>
        <label className='profile__label profile__label_type_underline'>Имя</label>
        <input className='profile__input profile__input_type_underline' required type='text' name='name' placeholder='Виталий'/>
        <label  className='profile__label'>E-mail </label>
        <input className='profile__input' required type='email' name='email'placeholder='pochta@yandex.ru'/>
      </form>
      <button className='button profile__button-edit' type='button'>Редактировать</button>
      <button className='button profile__button-signout'>Выйти из аккаунта</button>
    </main>
  )
}

export default Profile;
