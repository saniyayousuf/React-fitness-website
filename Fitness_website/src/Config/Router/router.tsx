import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Schedule from '../../Pages/Schedule';
import About from '../../Pages/About';
import Services from '../../Pages/Services';
import Gallary from '../../Pages/Gallary';
import Blog from '../../Pages/Blog';
import Contact from '../../Pages/Contact';
import MemberShip from '../../Pages/MemberShip';
import NotFound from '../../Pages/Notfound';
import Home from '../../Pages/Home';



export default function AppRouter() {
    return (
        <>
            <Router>
                {/* <nav>
                <Link to='/'>Home</Link>
                <Link to='About'>About</Link>
                <Link to='Services'>Services</Link>
                <Link to='Schedule'>Schedule</Link>
                <Link to='Gallary'>Gallary</Link>
                <Link to='Blog'>Blog</Link>
                <Link to='Contact'>Contact</Link>
                <Link to='Notfound'>Notfound</Link>
                <Link to='MemberShip'>MemberShip</Link>
            </nav> */}
                <Home />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="About" element={<About />} />
                    <Route path="Services" element={<Services />} />
                    <Route path="Schedule" element={<Schedule />} />
                    <Route path="Gallary" element={<Gallary />} />
                    <Route path="Blog" element={<Blog />} />
                    <Route path="Contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="MemberShip" element={<MemberShip />} />

                </Routes>
            </Router>

        </>
    )

}