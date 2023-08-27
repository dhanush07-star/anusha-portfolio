import React from "react";
import logo from "../logo.png";
import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

//navbar navbar-expand-lg navbar-light bg-dark fixed-top

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0    ">
                    <li className="nav-item active">
                    <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link smooth={true} to="about" offset={-110} className="nav-link" >about me</Link>
                    </li>
                    <li className="nav-item">
                    <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">services</Link>
                    </li>
                    <li className="nav-item">
                    <Link smooth={true} to="experience" offset={-110} className="nav-link" >experience</Link>
                    </li>
                    <li className="nav-item">
                    <Link smooth={true} to="portfolio" offset={-110} className="nav-link" >portfolio</Link>
                    </li>

                    <li className="nav-item">
                    <Link smooth={true} to="contacts" offset={-110} className="nav-link" >contacts</Link>
                    </li>

                    

                </ul>

            </div>

        </div>

    </nav>



  );
};

export default Navbar;



    // <nav class="navbar navbar-expand-lg bg-body-tertiary">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li class="nav-item">
    //           <a class="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">
    //             Link
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
