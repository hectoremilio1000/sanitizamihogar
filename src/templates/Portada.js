import React from "react";
import "../styles/main_portada.css";
import { FaWhatsapp } from "react-icons/fa";

const Portada = () => {
  return (
    <div className="main_portada content_box">
      <div className="text_portada">
        <h1>Sanitiza tu Hogar</h1>
        <p>Cuida a tus amigos y seres queridos</p>
        <a className="button_w" href="#">
          <FaWhatsapp />
          Reserva ya
        </a>
      </div>
      <div className="video_portada">
        <video
          loop
          autoPlay
          muted
          src="https://video.wixstatic.com/video/a6348a_cb23a2344b4b4f4292fa396bd5dd6c74/480p/mp4/file.mp4"
        ></video>
      </div>
    </div>
  );
};

export default Portada;
