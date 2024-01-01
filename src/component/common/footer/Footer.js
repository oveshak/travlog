import React from "react";
import { footer } from "../../../data/Data";
import "./footer.css";
const Footer = () => {
  return (
    <>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/logo.png" alt="" />
              
              <p>
                Receive updates, hot deals, tutorials, discounts sent straignt
                in your inbox every month
              </p>

              
            </div>
          </div>
          {footer.map((item, index) => (
            <div className="box" key={index}>
              <h3>{item.title}</h3>
              <ul>
                {item.text.map((items, index) => (
                  <li key={index}>{items.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      
      <div className="legal">
        <span>© 2023 Travlog. Designd By Oveshak.</span>
      </div>
    </>
  );
};

export default Footer;
