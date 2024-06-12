import React from "react";
import Produits from "./component/Section/Produits";
import { FloatButton } from 'antd';
import Codev from "./component/Section/Codev";
import Realisation from "./component/Section/Realisation";
import FooterComponent from "./component/Footer/FooterComponent";

function Home() {
  return (
    <div style={{
      height: "auto",
    }}>
      <FloatButton.BackTop />
      <div>
        <Produits />
      </div>
      <div>
        <Codev />
      </div>
      <div>
        <Realisation />
      </div>
      <div>
        <FooterComponent/>
      </div>
    </div>
  )
}

export default Home