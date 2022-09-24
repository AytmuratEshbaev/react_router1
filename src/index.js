import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";


function Navigation() {
  let logging = false;
  function Page(props) {
    logging = true;
    return (
      <div className='page' style={{ backgroundColor: props.bkColor }}>
        <p>{props.title}</p>
      </div>
    )
  }

  return (
    <div className='wrapper'>
      <nav>
        <NavLink to='/home'
          className={({ isActive }) => !logging || isActive ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to='/about'
          className={({ isActive }) => isActive ? 'active' : ''}>
          About
        </NavLink>
        <NavLink to='/contact'
          className={({ isActive }) => isActive ? 'active' : ''}>
          Contact
        </NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Page title="Home" bkColor="rgb(255, 55, 0)" />} />
        <Route path='/home' element={<Page title="Home" bkColor="rgb(255, 55, 0)" />} />
        <Route path='/about/' element={<Page title="About" bkColor="rgb(0, 119, 255)" />} />
        <Route path='/contact/' element={<Page title="Contact" bkColor="rgb(132, 0, 255)" />} />
      </Routes>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navigation />
  </BrowserRouter>
);

