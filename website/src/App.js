import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Royal from './components/Royal';
import Offers from './components/Offers';
import About from './components/About';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/about us' element={<About/>}/>
    <Route path='/offers' element={<Offers/>}/>
    <Route path='/royal to you' element={<Royal/>}/>
    </Routes>
    
    </>
  );
}

export default App;
