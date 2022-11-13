import React from 'react';

import { AboutUs, Order, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, Chef } from './container';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div className='app'>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Header/>}/>
      <Route exact path='/about' element={<AboutUs/>}/>
      <Route exact path='/menu' element={<SpecialMenu/>}/>
      <Route exact path='/gallery' element={<Gallery/>}/>
      <Route exact path='/contact' element={<FindUs/>}/>
      {/* <Route exact path='/about'>
        <AboutUs />
      </Route>
      <Route exact path='/menu'>
        <SpecialMenu />
      </Route>
      <Route exact path='/gallery'>
        <Gallery />
      </Route>
      <Route exact path='/gallery'>
        <FindUs />
        </Route> */}
    </Routes>
    <Chef /> 
    <Footer />
  </div>
);

export default App;
