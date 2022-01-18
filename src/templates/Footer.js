import React from "react";
import { Link } from "gatsby";
import "../styles/footer.css";

import { FaSprayCan } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";

import { AnchorLink } from "gatsby-plugin-anchor-links";

const Footer = () => {
  return (
    <div className="footer content_box">
      <AnchorLink className="logo" to="#iniciofinal" style={{ color: "#fff" }}>
        <div style={{ display: "flex" }} className="footerLogo">
          <FaSprayCan style={{ color: "white" }} />
          <p style={{ color: "white" }}>Sanitizamihogar</p>
        </div>
      </AnchorLink>
      <div className="footer_box">
        <p className="title_footer">Servicios</p>

        <p className="detail_footer">
          El mejor servicio de Sanitización a domicilio
        </p>
      </div>
      <div className="footer_box">
        <p className="title_footer" id="contacto">
          Contacto
        </p>
        <p className="detail_footer">
          <Link
            to="https://wa.me/+5219511028474"
            style={{ color: "white", gap: "10px", display: "flex" }}
          >
            <FaPhoneAlt className="iconofooter1" /> 951 102 8474
          </Link>
        </p>
        <p className="detail_footer">
          <FaHouseUser className="iconofoote2" /> Módulo h local 12 b C. A.
          Oaxaca de Juárez Oaxaca.
        </p>
        <p className="detail_footer">
          <a
            href="mailto:clientes@sanitizamihogar.com"
            style={{ color: "white", display: "flex", gap: "10px" }}
          >
            <FaEnvelope className="iconofoote3" style={{ color: "white" }} />{" "}
            <p> clientes@sanitizamihogar.com</p>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
