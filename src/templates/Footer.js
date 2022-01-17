import React from "react";
import { Link } from "gatsby";
import "../styles/footer.css";

import { FaSprayCan } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer content_box">
      <Link className="logo">
        <FaSprayCan />
        Sanitizamihogar.
      </Link>
      <div className="footer_box">
        <p className="title_footer">Services</p>
        <p className="detail_footer">Servicio de Sanitizacion</p>
        <p className="detail_footer">Servicio de desinfeccion a domicilio</p>
      </div>
      <div className="footer_box">
        <p className="title_footer">Contacto</p>
        <p className="detail_footer">
          <FaPhoneAlt /> +52 91562356898
        </p>
        <p className="detail_footer">
          <FaEnvelope /> sanitizamihogar@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
