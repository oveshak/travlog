import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa6";
import {nav} from "../../../data/Data" 
import "./header.css"
import {Link} from "react-scroll"
const Header = () => {
    const [navlist, setNavlist] = useState(false);
  return (
    <>
    <header>
        <div className="container flex navbar ">
          <div className="logo">
            <img src="./images/logo.png" alt="logo" />
          </div>
          <div className="nav">
            <ul className={navlist ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link  to={list.path} spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} >{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="button flex button1">
            <h4>
               Log in
            </h4>
            <button className="btn1">
              Sign up
            </button>
          </div>

          <div className="toggle">
            <button className="btn3" onClick={() => setNavlist(!navlist)}>
              {navlist ? <FaTimes /> : <FaAlignJustify />}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header