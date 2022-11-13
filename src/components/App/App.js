import './App.css';
import { useState } from "react";
import Main from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';


export default function App() {
  const [isBurgerOpen, setisBurgerOpen] = useState(true);

  function closeBurger() {
    setisBurgerOpen(false);
  }

  function handleClickBurgerButton() {
    setisBurgerOpen(true);
  }

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={
          <Main
            
          />
        } />
        <Route exact path="/movies" element={
          <Movies
            isBurgerOpen={isBurgerOpen}
            openBurger={handleClickBurgerButton}
            closeBurger={closeBurger}
          />
        } />
        <Route exact path="/saved-movies" element={
          <SavedMovies
            
          />
        } />
        <Route exact path="/profile" element={
          <Profile
            
          />
        } />
        <Route exact path="/signup" element={
          <Register />
        } />
        <Route exact path="/signin" element={
          <Login />
        } />
        <Route path="*" element={
          <NotFound />
        } />
      </Routes>
    </div>
  );
}