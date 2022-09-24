import React from 'react'
import './Preloader.css'

function Preloader(props) {
  return (
    <div className={props.state ? 'preloader' : 'preloader_type_hide'}>
      <div className='preloader__container'>
        <span className="preloader__round"></span>
      </div>
    </div>
  )
};

export default Preloader;
