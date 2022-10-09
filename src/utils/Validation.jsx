import React from 'react';

export function Validation() {
  const [values, setValues] = React.useState({name:'', email:'', password:''});
  const [errors, setErrors] = React.useState({});
  const [inputsValidity, setInputsValidity] = React.useState({name: true, email: true, password: true})
  const [formValidity, setFormValidity] = React.useState(false);

  function handleChange(e) {
    setValues({...values, [e.target.name]: e.target.value});
    setInputsValidity({...inputsValidity, [e.target.name]: e.target.validity.valid})
    setFormValidity(e.target.closest('.form').checkValidity());
    e.target.validity.patternMismatch
    ? setErrors({...errors, [`${e.target.name}Error`]: 'Можно использовать латиницу, кириллицу, пробел или дефис'})
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
