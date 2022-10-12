import React from 'react';
import './InfoTooltip.css';

function InfoTooltip(props) {

  React.useEffect(() => {
    const close = (e) => {(e.keyCode === 27) && props.onClose()}

    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  })

  function closeByOverlay(e) {e.target.classList.contains('tooltip_open') && props.onClose()}

  return (
    <div className={props.isOpen ? 'tooltip tooltip_open' : "tooltip"} onClick={closeByOverlay}>
      <div className="tooltip__main">
        <button className="tooltip__close" type="button" onClick={props.onClose}/>
        <p className="tooltip__text">Данные успешно изменены!</p>
      </div>
    </div>
  );
};

export default InfoTooltip;