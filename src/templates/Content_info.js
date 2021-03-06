import React from "react";
import "../styles/content_box.css";

const Content_info = () => {
  return (
    <div className="main_content_info content_box">
      <h1 className="title_box">Sanitiza y desinfecta tus espacios</h1>
      <p className="description_box">
        Con nuestros servicios de Sanitización Profesional que realizamos en
        Sanitizamihogar te sentirás tranquilo, ya que todos nuestros procesos y
        productos han sido científicamente probados y certificados para combatir
        efectivamente los virus, bacterias y alérgenos dañinos, lo que te
        garantiza la seguridad higiénica en tu Hogar, Negocio u Oficina.
      </p>
      <div className="galery_oficinas">
        <div className="card_oficina">
          <img
            src="https://imagenesrutalab.s3.amazonaws.com/sanitizamihigar/sanitizahogar.jpg"
            alt="Hogar"
          />
          <p className="name_card">Casas</p>
        </div>
        <div className="card_oficina">
          <img
            src="https://i.pinimg.com/originals/72/5e/78/725e788fce6ecb0281f460b19d92db06.jpg"
            alt="oficinas"
          />
          <p className="name_card">Oficinas</p>
        </div>
        <div className="card_oficina">
          <img
            src="https://thumbs.dreamstime.com/b/sala-de-clase-vac%C3%ADa-para-los-estudiantes-con-el-equipo-y-la-cocina-modernos-132952144.jpg"
            alt="Esculas"
          />
          <p className="name_card">Escuelas</p>
        </div>
        <div className="card_oficina">
          <img
            src="https://thumbs.dreamstime.com/b/f%C3%A1brica-vac%C3%ADa-interior-79408724.jpg"
            alt="Fábricas"
          />
          <p className="name_card">Fábricas</p>
        </div>
      </div>
    </div>
  );
};

export default Content_info;
