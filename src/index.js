import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Login from './components/LoginForm';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Topbar from './components/topbar';
import LoginForm from './components/LoginForm';

ReactDOM.render(

  <Router>
    <Topbar/>
    <Navbar/>
   
    <Routes>
      <Route path ='/'element={<Home/>} />
      <Route path ='/Home' element={<Home/>} />

      <Route path ='/Aboutus' element={<Aboutus/>} />
      <Route path ='/Contactus' element={<Contactus/>} />
      <Route path ='/Login' element={<LoginForm/>} />
    </Routes>
   
    
    

  </Router>,

  document.getElementById('root')
);
