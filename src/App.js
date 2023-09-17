import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import Home from './modules/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProducts from './modules/CategoryProducts';
import Cart from './modules/Cart';
import About from './modules/About';
import Contact from './modules/Contact';
import Shipping from './components/Shipping';
import Login from './modules/Login/Login';
import Signup from './modules/Signup/Signup';
import { auth } from "./firebase";

function App() {

  const [userName, setUserName] = useState("");
  // const navigate = useNavigate();
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);



  return (
    <div>
      <Header userName={userName}/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/categories' Component={Products}/>
        <Route path='/products/:id' Component={Product}/>
        <Route path='/categories/:name' Component={CategoryProducts}/>
        <Route path='/cart' Component={Cart}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/shipping' Component={Shipping}/>
        <Route path='/login' Component={Login}/>
        <Route path='/signup' Component={Signup}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
