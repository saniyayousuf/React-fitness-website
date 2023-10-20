import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import JSButton from '../components/JSButton';
import styled from 'styled-components';



const StyledButton = styled(JSButton)`
  background-color: #f44336;
  color: red;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e53935;
  }
`;



export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  pt-4">
        <div className="container-fluid">
          <NavLink  className="navbar-brand  ps-5" to="#">
            DORISON
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="ps-5   nav_div collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              
              <li className="nav-item px-2">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/Features"
                >
                  Features
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/Pricing"
                >
                  Pricing
                </NavLink>
              </li>

              <li className="nav-item px-2">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/Team"
                >
                  Team
                </NavLink>
              </li>

              <li className="nav-item px-2">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/Blog"
                >
                  Blog
                </NavLink>
              </li>

              <li className="nav-item px-2">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/Contact"
                >
            Contact
                </NavLink>
              </li>
            </ul>
            <div>
              <StyledButton  label="Try it Free" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}