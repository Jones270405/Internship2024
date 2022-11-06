import React from 'react';

import { AboutUs, Order, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, Chef } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    {/* <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels /> */}
    <Gallery />
    <FindUs />
    <Chef /> 
    <Footer />
  </div>
);

export default App;
