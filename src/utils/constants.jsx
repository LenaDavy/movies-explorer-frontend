export const BASE_URL = 'https://kinoteka.nomoredomains.xyz';
export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const PICTURE_URL = 'https://api.nomoreparties.co/';

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

export const renderParams = (windowWidth) => {
  let start
  let more
  if (windowWidth <= 760) { start = 5; more = 2} 
  if ((windowWidth >= 761) && (windowWidth <= 1040)) { start = 8; more = 2}
  if (windowWidth >= 1041) {start = 12; more = 3}
  return {start, more}
}
