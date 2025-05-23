// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';




// const NavBar = () => {


//     return ( 
    
//     <nav className="navbar navbar-expand-lg bg-light">
//     <div className="container-fluid">
//       <Link  className="navbar-brand" to="/movies">Vidly</Link>

//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarNav"
//         aria-controls="navbarNav" 
//         aria-expanded="false" 
//         aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//            <NavLink  className="nav-link " aria-current="page" to="/movies"> Movies</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink  className="nav-link" to="/customers">Customers</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/login">Login</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/register">Register</NavLink>
//           </li>
      
//         </ul>
//       </div>
//     </div>
//   </nav> );
// }
 
// export default NavBar;

import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Metrix
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/rentals">
            Rentals
          </NavLink>
          <NavLink className="nav-item nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link" to="/register">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
