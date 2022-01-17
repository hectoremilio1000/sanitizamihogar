import React, { useState } from "react";
import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";
import { FaSprayCan } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [show_menu, setShow_menu] = useState(false);
  const menu_toggle = () => {
    setShow_menu(!show_menu);
    // let menu = document.querySelector("#menu-bars");
    // let navbar = document.querySelector(".navbar");
    // menu.classList.toggle("fa-times");
    // navbar.classList.toggle("active");
  };
  return (
    <header>
      <Link className="logo">
        <FaSprayCan />
        Sanitizamihogar.
      </Link>
      <nav className={`navbar ${show_menu ? "active" : ""}`}>
        <Link className="active" href="#home">
          home
        </Link>
        <Link>Reserva</Link>
        <Link>Contacto</Link>
      </nav>
      <div className="icons">
        <span className="block_icon">
          <FaBars id="menu-bars" onClick={menu_toggle} />
        </span>
        <Link className="contacto_w">
          <FaWhatsapp /> <p>+52915096462</p>
        </Link>
        {/* <Link className="fas fa-heart"></Link>
        <Link className="fas fa-shopping-cart"></Link> */}
      </div>
    </header>
  );
};

export default Header;
