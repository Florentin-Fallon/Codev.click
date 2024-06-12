import React from "react";
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Propos from './Propos';
import Contact from './Contact';
import Services from './Services';
import Realisations from "./Realisations";
import Confidentialites from "./Confidentialites";
import Remboursement from "./Remboursement";
import Condition from "./Condition";
import Mentions from "./Mentions";
import Amelioration from "./Amelioration";
import Decouverte from "./Decouverte";
import Premium from "./Premium";
import Breadcrumbs from "./component/Breadcrumbs/Breadcrumbs";
import Header from "./component/Header/Header";
import LandingPage from "./component/LandingPage/LandingPage";

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      <Header />
      {isHomePage && <LandingPage />}
      <div>
        {!isHomePage && (
          <div>
            <Breadcrumbs />
          </div>
        )}
        <div className={!isHomePage}>
          {children}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propos" element={<Propos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/confidentialites" element={<Confidentialites />} />
          <Route path="/remboursement" element={<Remboursement />} />
          <Route path="/condition" element={<Condition />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/amelioration" element={<Amelioration />} />
          <Route path="/decouverte" element={<Decouverte />} />
          <Route path="/premium" element={<Premium />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
