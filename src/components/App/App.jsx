import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { UserContext } from '../contexts/UserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import PageNotFound from '../PageNotFound/PageNotFound';
import { getUserData } from '../../utils/MainApi';
import '../ChapterTitle/ChapterTitle.css';
import '../Button/Button.css';
import '../List/List.css';
import '../Link/Link.css';
import './App.css';


function App() {
  const [userData, setUserData] = React.useState({});
  const [displayNavigation, setDisplayNavigation] = React.useState(false);
  const [isLockedApp, setIsLockedApp] = React.useState(true);
  let token = localStorage.getItem('token');

  React.useEffect(() => {
    if (token) {
      getUserData(token) 
      .then((userInfo) => {setUserData({name: userInfo.name, email: userInfo.email, _id: userInfo._id, token})})
      .catch(err => {console.log(`Ошибка авторизации пользователя: ${err}`)})
    } else {setIsLockedApp(false)}
  },[token]);

  function handleChangeUserData(data) {
    setUserData({...userData, name: data.name, email: data.email})
  }
  
  function handleClickDisplayNavigation() {
    setDisplayNavigation(!displayNavigation)
  }

  return (
    <UserContext.Provider value={userData}>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Header isLogged={isLockedApp} onClick={handleClickDisplayNavigation}/>
            <Main/>
            <Footer/>
            <Navigation isOpen={displayNavigation} onClick={handleClickDisplayNavigation}/>
          </Route>
          <ProtectedRoute path='/movies' isLogged={isLockedApp} onClick={handleClickDisplayNavigation} isOpen={displayNavigation}
            header={Header} movies={Movies} footer={Footer} navigation={Navigation}
          />
          <ProtectedRoute path='/saved-movies' isLogged={isLockedApp} onClick={handleClickDisplayNavigation} isOpen={displayNavigation}
            header={Header} movies={SavedMovies} footer={Footer} navigation={Navigation}
          />
          <ProtectedRoute path='/profile' isLogged={isLockedApp} onClick={handleClickDisplayNavigation} isOpen={displayNavigation}
            header={Header} profile={Profile} navigation={Navigation} onSubmit={handleChangeUserData}
          />
          <Route path='/signup' >
            <Register/>
          </Route>
          <Route path='/signin'>
            <Login/>
          </Route>
          <Route path='*'>
            <PageNotFound/>
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
