import React from 'react';
import { ERROR_EMAIL, ERROR_NAME } from './constants'
import { UserContext } from '../components/contexts/UserContext';


export function Validation() {
  const userInfo = React.useContext(UserContext);
  const [values, setValues] = React.useState({name:'', email:'', password:''});
  const [errors, setErrors] = React.useState({});
  const [inputsValidity, setInputsValidity] = React.useState({name: true, email: true, password: true})
  const [formValidity, setFormValidity] = React.useState(false);

  React.useEffect(() => {
   if (userInfo.name !== undefined) {setValues({...values, name: userInfo.name, email: userInfo.email})}
  }, [userInfo]);


  function handleChange(e) {
    setValues({...values, [e.target.name]: e.target.value});
    setInputsValidity({...inputsValidity, [e.target.name]: e.target.validity.valid})
    setFormValidity(e.target.closest('.form').checkValidity());
    e.target.validity.patternMismatch
    ? setErrors({...errors, [`${e.target.name}Error`]: (e.target.name === 'email') ? ERROR_EMAIL : ERROR_NAME})
    : setErrors({...errors, [`${e.target.name}Error`]: e.target.validationMessage})
  }

  const resetForm = React.useCallback(() => {
      setValues({name:'', email:'', password:''});
      setErrors({});
      setFormValidity(false);
    }, []
  )

  return { values, errors, inputsValidity, formValidity, handleChange, resetForm};
}
