import { MOVIES_URL, handleResponce  } from './constants';

export const getInitialMovies = () => {
  return fetch(`${MOVIES_URL}`)
  .then(handleResponce)
};

