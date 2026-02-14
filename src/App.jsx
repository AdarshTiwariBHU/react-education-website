import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services/Services.jsx';
import Banner from './components/Banner/Banner.jsx';
import Subscribe from './components/Subscribe/Subscribe.jsx';
import Banner2 from './components/Banner/Banner2.jsx';
const App = () => {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>
      
      <Hero/>
      <Services/>
      <Banner/>
      <Subscribe/>
      <Banner2/>

      </main>
    
  )
}

export default App