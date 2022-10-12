export const BASE_URL = 'https://kinoteka.nomoredomains.xyz';
export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const PICTURE_URL = 'https://api.nomoreparties.co/';

export const REGEX_EMAIL = '[A-Za-z0-9\.\_\-]*@[A-Za-z0-9\-]+[\.][A-Za-z]+';
export const REGEX_NAME = '[A-Za-zА-Яа-яЁё\s\-]*';

export const ERROR_EMAIL = 'email должен содержать наименование, @ и адрес домена';
export const ERROR_NAME = 'Можно использовать латиницу, кириллицу, пробел или дефис';

export const SHORT_DURATION = 40;

export const handleResponce = res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);

export const filterByQuery = (sample, array) => {
  return array.filter((movie) => {
    const ru = String(movie.nameRU).toLowerCase().trim();
    const en = String(movie.nameEN).toLowerCase().trim();
    const userSample = sample.toLowerCase().trim();
    return ru.includes(userSample) || en.includes(userSample);
  })
};

export const convertDuration = duration => `${Math.floor(duration / 60)}ч ${duration % 60}м`

export const CHANGE_POINTS = {
  s: 760,
  m: 1040
}

export const renderParams = (windowWidth) => {
  let start
  let more
  if (windowWidth <= CHANGE_POINTS.s) { start = 5; more = 2} 
  if ((windowWidth > CHANGE_POINTS.s) && (windowWidth <= CHANGE_POINTS.m)) { start = 8; more = 2}
  if (windowWidth > CHANGE_POINTS.m) {start = 12; more = 3}
  return {start, more}
}
