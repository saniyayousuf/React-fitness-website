import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import h1_hero from './images/hero/h1_hero.png.webp';
import section_bg01  from './images/gallery/section_bg01.png.webp';
import about from './images/gallery/about.png.webp'
import AppRouter from './Config/Router/router';
import Navbar from './components/Navbar/Navbar';


function App() {
  // const MyComponent = () => {
    const divStyle = {
      backgroundImage: `url(${section_bg01})`,
      backgroundSize: 'cover', // Adjust image size to cover the div
      backgroundPosition: 'center', // Center the image within the div
      width: '98%', // Set the width of the div
      height: '100vh', // Set the height of the div
      color: 'white', // Text color for visibility on top of the image
    };
  
  return (
    <div >
      <Navbar/>
      <img className='hero' src={h1_hero} alt="My Image" width="100%" />

      <div>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={about} alt=""  width="400"/>
                </div>
                <div className="col-md-6">
                <h2 className='heead2'>Safe Body building proper Solutions That Saves our Valuable Time!</h2>
                <p className="pera">Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts &amp; elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.</p>
                <p className="mb-65 pera">Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.</p>
                <button  >Become a Member</button>



                </div>
                </div>
        </div>
    </div>

    <div>
      <div style={divStyle}  className=' container-fluid  mt-5'>
        <div className="row align-items-center  ">
          <div className="col-md-8 mt-3">
            <p>-------- OUR SERVICES FOR YOU</p>
            <h2 >PUSH YOUR LIMITS FORWARD We Offer to you</h2>
          </div>
          <div className="col-md-4">
            <button className='sbtn'>MORE SERVICES</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">

          </div>
        </div>
      </div>
    </div>
{/* <AppRouter /> */}


    </div>
  );
}

export default App;
