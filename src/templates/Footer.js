import React from "react";
import { Link } from "gatsby";
import "../styles/footer.css";

import { FaSprayCan } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer content_box">
      <Link className="logo">
        <FaSprayCan />
        Sanitizamihogar.
      </Link>
      <div className="footer_box">
        <p className="title_footer">Servicios</p>

        <p className="detail_footer">
          El mejor servicio de Sanitización a domicilio
        </p>
      </div>
      <div className="footer_box">
        <p className="title_footer">Contacto</p>
        <p className="detail_footer">
          <FaPhoneAlt className="iconofooter1" /> +52 91562356898
        </p>
        <p className="detail_footer">
          <FaHouseUser className="iconofoote2" /> Módulo h local 12 b C. A.
          Oaxaca de Juárez Oaxaca.
        </p>
        <p className="detail_footer">
          <FaEnvelope className="iconofoote3" /> sanitizamihogar@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
