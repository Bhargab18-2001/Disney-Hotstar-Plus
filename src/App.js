import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import { useSelector } from "react-redux"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {
  selectUserName,
} from './features/user/userSlice'

function App() {
  const userName = useSelector(selectUserName);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element = {
            // if (!userName) {
            //   NavigationType("/");
            //   return;
            //  }
            (userName &&
              <Detail />) || <Login />
            } />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
