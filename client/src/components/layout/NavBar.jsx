import React, { useEffect } from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'

function NavBar() {

  return (
    <>
    
   <nav className="navbar navbar-expand-lg  w-100  navbar-dark borderBottom p-3 navfont mb-5">
  <div className="container">
    <a className="navbar-brand" href="#">
      Portfolio
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ms-3">
          <NavLink className="nav-link " aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item ms-3">
          <NavLink className="nav-link e" aria-current="page" to="/services">
           Services
          </NavLink>
        </li>
        <li className="nav-item ms-3">
          <NavLink className="nav-link " aria-current="page" to="/blogs">
            Blog
          </NavLink>
        </li>
        <li className="nav-item ms-3">
          <NavLink className="nav-link " aria-current="page" to="/about">
            About Us
          </NavLink>
        </li>
        <li className="nav-item ms-3">
          <NavLink className="nav-link " aria-current="page" to="/contact-us">
            Contact
          </NavLink>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>


    </>
  )
}

export default NavBar