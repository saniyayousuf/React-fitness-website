import React from 'react';
import './navbar.css';
import {BrowserRouter as Router ,Routes , Route ,Link} from 'react-router-dom';
import loder from '../../images/logo/loder.png.webp';
import logo from '../../images/logo/logo.png.webp';
import logo2 from '../../images/logo/logo2_footer.png.webp';
import BAbutton from '../Button/BAbutton'
import MemberShip from '../../Pages/MemberShip';

export default function Navbar (){


    const render =()=>{
       < Link to='MemberShip'>MemberShip</Link>
       
    }
    <Route  path="MemberShip" element={<MemberShip/>}/>

    return (
        <>

    <nav className="navbar">
      <ul className="nav-links">
        <li>
        <img src={logo} alt="" /></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
      <div className="button-container">
        {/* <button>Button 1</button> */}
     <button onClick={render} >Become a Member</button>
      </div>
    </nav>

    
    </>
  );
}