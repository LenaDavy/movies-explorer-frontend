import React from 'react';
import { useHistory } from 'react-router-dom';
import { Validation } from '../../utils/Validation';
import { signIn } from '../../utils/MainApi';
import IdentityForm from '../IdentityForm/IdentityForm';

function Login() {
  const [responceErr, setResponceErr] = React.useState('')
  const validate = Validation();
  const history = useHistory(); 

  function handleSubmit(e) {
    e.preventDefault()
    signIn(validate.values.email, validate.values.password)
    .then((res) => {localStorage.setItem('token', res.token);
    history.push('/movies'); validate.resetForm();
    })
    .catch(err => {setResponceErr(`Ошибка авторизации пользователя: ${err}`)})
  }
  
  return ( 
    <IdentityForm name='signin' greeting='Рады видеть!' buttonText='Войти' responceErr={responceErr} validate={validate} onSubmit={handleSubmit}/>
  )
}

export default Login;
