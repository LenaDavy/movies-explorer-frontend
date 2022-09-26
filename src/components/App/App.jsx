import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
import '../ChapterTitle/ChapterTitle.css';
import '../Button/Button.css';
import '../List/List.css';
import '../Link/Link.css';
import './App.css';

function App() {
  const [displayNavigation, setDisplayNavigation] = React.useState(false);
  
  function handleClickDisplayNavigation() {
    setDisplayNavigation(!displayNavigation)
  }

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Header onClick={handleClickDisplayNavigation}/>
          <Main/>
          <Footer/>
        </Route>
        <Route path='/movies'>
          <Header onClick={handleClickDisplayNavigation}/>
          <Movies/>
          <Footer/>
          <Navigation isOpen={displayNavigation} onClick={handleClickDisplayNavigation}/>
        </Route>
        <Route path='/saved-movies'>
          <Header onClick={handleClickDisplayNavigation}/>
          <SavedMovies/>
          <Navigation isOpen={displayNavigation} onClick={handleClickDisplayNavigation}/>
          <Footer/>
        </Route>
        <Route path='/profile'>
          <Header onClick={handleClickDisplayNavigation}/>
          <Profile/>
          <Navigation isOpen={displayNavigation} onClick={handleClickDisplayNavigation}/>
        </Route>
        <Route path='/signup'>
          <Register/>
        </Route>
        <Route path='/signin'>
          <Login/>
        </Route>
        <Route path="*">
          <PageNotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
