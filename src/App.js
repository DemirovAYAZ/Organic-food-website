import React from 'react';
import Footer from "./components/Footer";
import NavbarOfWebsite from "./components/NavbarOfWebsite";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from './pages/Shop';
import Contact from "./pages/Contact";
import Everything from './pages/Everything';
import Grocery from './pages/Grocery';
import Juice from './pages/Juice';
import Basket from './pages/Basket';
import About from './pages/About';
import Data from './Data/Data.json'
import Error from './pages/Error'
import CardInfo from './components/CardInfo';


function App() {

  return (
    <>
      <NavbarOfWebsite />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/shop/*' element={<Shop data={Data}/>}>
          <Route index element={<Everything data={Data} />} />
          <Route path='grocery' element={<Grocery data={Data}  />} />
          <Route path='juice' element={<Juice data={Data}/>} />
        </Route>
        <Route path='/shop'>
          <Route path=':id/:name' element={<CardInfo />}></Route>
        </Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path='*' element={<Error />}/>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path='/basket' element={<Basket />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;