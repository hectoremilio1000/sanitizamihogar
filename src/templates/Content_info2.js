import React from "react";
import "../styles/content_box.css";

const Content_info2 = () => {
  return (
    <div className="main_content_info content_box">
      <h1 className="title_box">Evita el Contagio</h1>
      <p className="description_box">
        La sanitización de Espacios que realizamos Sanitizamihogar trabaja a
        escala molecular, brindando una capa protectora por hasta 30 días, por
        lo que se recomienda su aplicación para lugares con tráfico medio y alto
        de personas, así como para Residenciales, así podrás reducir las
        probabilidades del contagio de enfermedades.
      </p>
      <div className="detail_info">
        <div className="img_info">
          <img
            src="https://neotekjn.com/wp-content/uploads/2021/08/desinfeccionmuebles1.png"
            alt="desinfectant"
          />
        </div>
        <div className="text_content">
          <h1 className="title_text">EFECTIVIDAD GARANTIZADA</h1>
          <p className="description_text">
            Todos nuestros servicios son 100% personalizados, ya que analizamos
            las condiciones específicas de cada lugar para garantizar la
            Efectividad, además todos los productos que utilizamos son
            analizados y autorizados por la COFEPRIS. ¡Conoce todo lo que
            podemos hacer!
          </p>
          <ul className="list_detail">
            <li>Sanitización de Espacios</li>
            <li>Sanitización de Casas</li>
            <li>Sanitización de Autos</li>
            <li>Sanitización de Bodegas</li>
            <li>Sanitización de Empresas</li>
            <li>Sanitización de Escuelas</li>
          </ul>
        </div>
      </div>
      <div className="detail_info row_reverse">
        <div className="img_info">
          <img
            src="https://neotekjn.com/wp-content/uploads/2021/08/Sanitizacion3.0.png"
            alt="desinfectant"
          />
        </div>
        <div className="text_content">
          <h1 className="title_text">DESINFECCIÓN PREVENTIVA</h1>
          <p className="description_text">
            Como bien dicen, "es mejor prevenir que lamentar" por eso hacer un
            Servicio de Sanitización puede marcar la diferencia en el cuidado de
            tu Salud y la de los tuyos. Sólo utilizamos sanitizantes de amplio
            espectro, lo que garantiza la eliminación del 99.9% de los agentes
            patógenos, sin generar resisitencia al usarlo.
          </p>
          <ul className="list_detail">
            <li>Ayuda a prevenir la contaminación cruzada</li>
            <li>
              Contamos con Sanitización por Termonebulización y Sanitización por
              Aspersión
            </li>
            <li>Tecnología de Vanguardia</li>
            <li>
              Contamos con un Sistema de Mejora Continua que nos permite
              ofrecerte un mejor servicio.
            </li>
          </ul>
        </div>
      </div>
      <div className="detail_info">
        <div className="img_info">
          <img
            src="https://servinalopo.es/wp-content/uploads/2020/05/desinfeccion_restaurantes_elda_petrer_01.png"
            alt="desinfectant"
          />
        </div>
        <div className="text_content">
          <h1 className="title_text">PROTEJE TU NEGOCIO</h1>
          <p className="description_text">
            Crea un ambiente saludable, libre de Enfermedades Infecciosas
            tomando el control y disminuyendo al mínimo la presencia de virus y
            bacterias, disminuyendo el ausentismo laboral con lo que podrás
            mantener la productividad de tu Negocio.
          </p>
          <ul className="list_detail">
            <li>Resolvemos Sanitizaciones Urgentes </li>
            <li>
              Contamos con el conocimiento para realizar Desinfecciones
              Correctivas ante la presencia de COVID-19
            </li>
            <li>Sin olor ni residuos</li>
            <li>No hay necesidad de interrumpir la Operación del Negocio</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content_info2;
