import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'
const App = () => {
  return (
    
    <Router>
      <div className='max-w-[1440px] mx-auto bg-white'>
  
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/property/:id' element={<PropertyDetails/>}/>
    </Routes>
    <Footer/>
  </div>
  </Router>
  );
  
};

export default App;
