import React from 'react';
import './InfoTooltip.css';

function InfoTooltip(props) {

  return (
    <main className={props.isOpen ? 'tooltip tooltip_open' : 'tooltip'}>
      <div className='tooltip__form'>
        <button className='button button_type_close tooltip__button-close' type='button'/>
        <p className='tooltip__text'>{props.text ? props.text : "Что-то пошло не так! Попробуйте ещё раз."}</p>
      </div>
    </main>
  );
};

export default InfoTooltip;