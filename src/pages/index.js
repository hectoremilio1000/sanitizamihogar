import * as React from "react";
import Header from "../templates/Header";
import "../styles/home.css";
import Portada from "../templates/Portada";
import Content_info from "../templates/Content_info";
import Content_info2 from "../templates/Content_info2";

// markup
const IndexPage = () => {
  return (
    <div>
      <Header />
      <Portada />
      <Content_info />
      <Content_info2 />
    </div>
  );
};

export default IndexPage;
