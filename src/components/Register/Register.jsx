import React from 'react';
import { useHistory } from 'react-router-dom';
import { Validation } from '../../utils/Validation';
import { signUp } from '../../utils/MainApi';
import IdentityForm from '../IdentityForm/IdentityForm';

function Register() {
  const [responceErr, setResponceErr] = React.useState('')
  const validate = Validation()
  const history = useHistory(); 

  function handleSubmit(e) {
    e.preventDefault()
    signUp(validate.values.name, validate.values.email, validate.values.password)
    .then((res) => {localStorage.setItem('token', res.token); history.push('/movies');
      validate.resetForm();
    })
    .catch(err => {setResponceErr(`Ошибка регистрации пользователя: ${err}`)})
  }
  
  return ( 
    <IdentityForm name='signup' greeting='Добро пожаловать!' buttonText='Зарегистрироваться' validate={validate}
      responceErr={responceErr} onSubmit={handleSubmit}>
      <label  className='identity__label'>Имя
        <input className={validate.inputsValidity.name ? 'identity__input' : 'identity__input identity__input_type_error'} required
          type='text' pattern='[A-Za-zА-ЯЁа-яё0-9\s-]*' minLength={2} maxLength={30} name='name' value={validate.values.name} onChange={validate.handleChange}/>
        <span className='identity__message-error' name='nameError'>{validate.errors.nameError}</span>
      </label>
    </IdentityForm>
  )
}

export default Register;
