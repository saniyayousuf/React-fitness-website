import React from 'react';
import './navbar.css';
import { NavLink } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import loder from '../../images/logo/loder.png.webp';
import logo from '../../images/logo/logo.png.webp';
import logo2 from '../../images/logo/logo2_footer.png.webp';
import BAbutton from '../../components/Button/BAbutton'
import MemberShip from '../../Pages/MemberShip';
import About from '../../Pages/About';
import Blog from '../../Pages/Blog';
import Contact from '../../Pages/Contact';
import Gallary from '../../Pages/Gallary';
import Schedule from '../../Pages/Schedule';


export default function Navbar() {


  const render = () => {
    < Link to='MemberShip'>MemberShip</Link>

  }
  <Route path="MemberShip" element={<MemberShip />} />

  return (
    <>

      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <img src={logo} alt="" /></li>
           
                <Link to='About'>About</Link>
                <Link to='Services'>Services</Link>
                <Link to='Schedule'>Schedule</Link>
                <Link to='Gallary'>Gallary</Link>
                <Link to='Blog'>Blog</Link>
                <Link to='Contact'>Contact</Link>
                <Link to='Notfound'>Notfound</Link>
                <Link to='MemberShip'>MemberShip</Link>
        </ul>
        <div className="button-container">
          
          <button onClick={render} >Become a Member</button>
        </div>
      </nav>


    </>
  );
}