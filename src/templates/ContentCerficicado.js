import React from "react";
import "../styles/content_box.css";

const ContentCertificado = () => {
  return (
    <div className="main_content_info content_box">
      <h1 className="title_box">Certificados</h1>
      <p className="description_box">
        Contamos con todos los certificados que nos acreditan como empresa 100%
        responsable con la seguridad de tus seres queridos y del medio ambiente.
      </p>
      <div className="galery_oficinas" style={{ paddingBottom: 50 }}>
        <div className="card_oficina">
          <img
            src="https://imagenesrutalab.s3.amazonaws.com/sanitizamihigar/logos/cofepris.jpg"
            alt="COFEPRIS"
            style={{ objectFit: "contain" }}
          />
          <p className="name_card">COFEPRIS</p>
        </div>
        <div className="card_oficina">
          <img
            src="https://imagenesrutalab.s3.amazonaws.com/sanitizamihigar/logos/EcoLogo.png"
            alt="ECO"
            style={{ objectFit: "contain" }}
          />
          <p className="name_card">ECO FRIENDLY</p>
        </div>
        <div className="card_oficina">
          <img
            src="https://imagenesrutalab.s3.amazonaws.com/sanitizamihigar/logos/Copia_de_logo-biodegradable.png"
            alt="100% BIODEGRADABLE"
            style={{ objectFit: "contain" }}
          />
          <p className="name_card">100% BIODEGRADABLE</p>
        </div>
        <div className="card_oficina">
          <img
            src="https://imagenesrutalab.s3.amazonaws.com/sanitizamihigar/logos/greensealnuevo.png"
            alt="100% BIODEGRADABLE"
            style={{ objectFit: "contain" }}
          />
          <p className="name_card">GREEN SEAL</p>
        </div>
      </div>
    </div>
  );
};

export default ContentCertificado;
