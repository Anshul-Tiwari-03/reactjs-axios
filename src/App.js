import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './view/Pages/Home';
import About from './view/Pages/About';
import Navbar from './view/components/Navbar';
import Axios from './view/components/Axios';

function App() {
  return (
    <div className="">


      <BrowserRouter>
      <Navbar/>
      
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>

        </Routes>
        <div className='container'>
 
          <br></br>
          <hr></hr>
          <br></br>
          <Axios/>
          
        </div>
 
        <div className='container' style={{height:"300px"}}>
        
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
