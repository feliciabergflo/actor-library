import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Favorites from './components/Favorites';


const App =()=>{
  return (
    <Router>
      <div className='App'>
        <Navbar />   
        <div className='container'>
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/favorites' element={<Favorites/>} />
            </Routes>
         </div>
      </div>
    </Router>
)};

export default App;