import './App.css';
import Main from '../Main/Main';
import { Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={
          <Main />
        } />
      </Routes>
    </div>
  );
}