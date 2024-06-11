import React from "react";
import Header from "./component/Header/Header";
import LandingPage from "./component/LandingPage/LandingPage";
import Produits from "./component/Section/Produits";

function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <LandingPage />
      </div>
      <div>
        <Produits />
      </div>
    </div>
  )
}

export default Home