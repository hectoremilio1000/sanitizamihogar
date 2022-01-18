import React, { useState } from "react";
import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";
import { FaSprayCan } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AnchorLink } from "gatsby-plugin-anchor-links";

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
      <AnchorLink className="logo" to="#iniciofinal" style={{ color: "#fff" }}>
        <div style={{ display: "flex" }} className="footerLogo">
          <FaSprayCan style={{ color: "#241690" }} />
          <p style={{ color: "#241690" }}>Sanitizamihogar</p>
        </div>
      </AnchorLink>
      <nav className={`navbar ${show_menu ? "active" : ""}`}>
        <AnchorLink className="active" to="#iniciofinal">
          Inicio
        </AnchorLink>
        <Link to="https://wa.me/+5219511028474">Reserva</Link>
        <AnchorLink to="#contacto">Contacto</AnchorLink>
      </nav>
      <div className="icons">
        <span className="block_icon">
          <FaBars id="menu-bars" onClick={menu_toggle} />
        </span>

        <Link to="https://wa.me/+5219511028474" className="contacto_w">
          <FaWhatsapp style={{ color: "#241690", cursor: "pointer" }} />{" "}
          <p style={{ color: "#241690", cursor: "pointer" }}>9511028474</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
