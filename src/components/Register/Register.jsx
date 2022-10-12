import React from 'react';
import { useHistory } from 'react-router-dom';
import { REGEX_NAME } from '../../utils/constants'
import { Validation } from '../../utils/Validation';
import { signUp } from '../../utils/MainApi';
import IdentityForm from '../IdentityForm/IdentityForm';

function Register(props) {
  const [responceErr, setResponceErr] = React.useState('')
  const validate = Validation()
  const history = useHistory();

  React.useEffect(() => {
    props.isLogged && history.push('/');
  }, []);

  function handleSubmit(e) {
    e.preventDefault()
    e.target.setAttribute('disabled', true);
    e.target.classList.add('button_type_form-submit_disabled');
    signUp(validate.values.name, validate.values.email, validate.values.password)
    .then((res) => {
      validate.resetForm();
      localStorage.setItem('token', res.token);
      props.onSubmit(res);
      history.push('/movies');
    })
    .catch(err => {setResponceErr(`Ошибка регистрации пользователя: ${err}`)})
  }
  
  return ( 
    <IdentityForm name='signup' greeting='Добро пожаловать!' buttonText='Зарегистрироваться' validate={validate}
      responceErr={responceErr} onSubmit={handleSubmit}>
      <label  className='identity__label'>Имя
        <input className={validate.inputsValidity.name ? 'identity__input' : 'identity__input identity__input_type_error'} required
          type='text' pattern={REGEX_NAME} minLength={2} maxLength={30} name='name' value={validate.values.name} onChange={validate.handleChange}/>
        <span className='identity__message-error' name='nameError'>{validate.errors.nameError}</span>
      </label>
    </IdentityForm>
  )
}

export default Register;
