import React from 'react';
import { Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ ...props}) => {
  return (
    (props.isLogged === false)
    ? <Redirect to='/'/>
    : props.path.includes('movies')
      ? <><props.header isLogged={props.isLogged} onClick={props.onClick}/><props.movies/><props.footer/><props.navigation isOpen={props.isOpen} onClick={props.onClick}/></>
      : <><props.header isLogged={props.isLogged} onClick={props.onClick}/><props.profile onSubmit={props.onSubmit}/><props.navigation isOpen={props.isOpen} onClick={props.onClick}/></>
    )
};