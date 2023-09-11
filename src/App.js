import React from 'react';
import './App.css';
import Home from './Home/Home'
import Success from './Success/Success';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Examday from './Examday/Examday';
import Stopwatch from './Stopwatch/Stopwatch';
import Timetable from './Timetable/Timetable';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/timetable' element={<Timetable/>}/>
        <Route path='/examday' element={<Examday/>}/>
        <Route path='/stopwatch' element={<Stopwatch/>} />
      </Routes>
    </div>
  );
}

export default App;
