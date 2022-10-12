import React from 'react';
import { useHistory } from 'react-router-dom';
import { Validation } from '../../utils/Validation';
import { signIn } from '../../utils/MainApi';
import IdentityForm from '../IdentityForm/IdentityForm';

function Login(props) {
  const [responceErr, setResponceErr] = React.useState('')
  const validate = Validation();
  const history = useHistory(); 

  React.useEffect(() => {
    props.isLogged && history.push('/');
  }, []);


  function handleSubmit(e) {
    e.preventDefault()
    e.target.setAttribute('disabled', true);
    e.target.classList.add('button_type_form-submit_disabled');
    signIn(validate.values.email, validate.values.password)
    .then((res) => {
      validate.resetForm();
      localStorage.setItem('token', res.token);
      props.onSubmit(res);
      history.push('/movies'); 
    })
    .catch(err => {setResponceErr(`Ошибка авторизации пользователя: ${err}`)})
  }
  
  return ( 
    <IdentityForm name='signin' greeting='Рады видеть!' buttonText='Войти' responceErr={responceErr} validate={validate} onSubmit={handleSubmit}/>
  )
}

export default Login;
