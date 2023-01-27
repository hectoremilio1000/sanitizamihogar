import React from "react";
import "../styles/main_portada.css";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "gatsby";

const Portada = () => {
  return (
    <div className="main_portada content_box" id="iniciofinal">
      <div className="text_portada">
        <h1>Sanitiza tu Hogar</h1>
        <p>
          La diferencia entre limpiar, desinfectar y <b>SANITIZAR</b> es la
          salud de tu familia
        </p>

        <Link to="https://wa.me/+5219511028474" className="button_w">
          <FaWhatsapp />
          Reserva ya
        </Link>
      </div>
      <div className="video_portada">
        <video
          loop
          autoPlay
          playsInline
          muted
          src="https://video.wixstatic.com/video/a6348a_cb23a2344b4b4f4292fa396bd5dd6c74/480p/mp4/file.mp4"
        ></video>
      </div>
    </div>
  );
};

export default Portada;
