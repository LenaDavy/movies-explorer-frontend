import { BASE_URL, handleResponce  } from './constants';

export const signUp = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name, email, password})
  })
  .then(handleResponce)
}

export const signIn = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({password, email})
  })
  .then(handleResponce)
}

export const getUserData = (token) => { 
  return fetch(`${BASE_URL}/users/me`, { 
    headers: {'Authorization' : `Bearer ${token}` },
  })
  .then(handleResponce)
}
  
export const changeUserInfo = (name, email, token) => { 
  return fetch(`${BASE_URL}/users/me`, { 
    method: 'PATCH',
    headers: {'Content-Type': 'application/json', "Authorization" : `Bearer ${token}`},
    body: JSON.stringify({ name, email}) 
  }) 
  .then(handleResponce) 
}

export const getUserMovies = (token) => { 
  return fetch(`${BASE_URL}/movies`, { 
    headers: { 'Authorization' : `Bearer ${token}` },
  })
  .then(handleResponce)
}; 
    
export const saveMovie = (movie, token) => {
  return fetch(`${BASE_URL}/movies`, { 
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Authorization' : `Bearer ${token}` },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: movie.image.formats.thumbnail.url,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }) 
  }) 
  .then(handleResponce) 
}; 

export const deleteMovie = (_id, token) => { 
  return fetch(`${BASE_URL}/movies/${_id}`, { 
    method: 'DELETE',
    headers: {"Authorization" : `Bearer ${token}`},
  }) 
  .then(handleResponce) 
};
