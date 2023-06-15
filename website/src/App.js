import './App.css';

import { Route, Routes } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Offers from './components/Offers';
import { Provider } from 'react-redux';
import Royal from './components/Royal';
import Services from './components/Services';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/about us' element={<About/>}/>
    <Route path='/offers' element={<Offers/>}/>
    <Route path='/royal to you' element={<Royal/>}/>
    </Routes>
    
   
    </Provider>
  );
}

export default App;
