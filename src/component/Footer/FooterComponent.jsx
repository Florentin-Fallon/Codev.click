import React from "react";
import { Link } from "react-router-dom";

export function FooterComponent() {
  return (
    <div>
      <div className="flex gap-40 justify-center p-8 bg-indigo-500 text-white">
      <div>
        <Link to="/"><h1 className="text-xl font-semibold border-b-2">Codev</h1></Link>
      </div>
      <div>
        <h1 className="text-lg font-semibold border-b-2">Réseaux sociaux</h1>
          <ul className="pt-4">
            <Link to="https://www.instagram.com/codedev33/"><li className="pb-2">Instagram</li></Link>
            <Link to="https://www.tiktok.com/@codedev33"><li className="pb-2">TikTok</li></Link>
            <Link to="https://github.com/Florentin-Fallon"><li className="pb-2">Github</li></Link>
          </ul>
      </div>
      <div>
        <h1 className="text-lg font-semibold border-b-2 w-32">En savoir plus</h1>
          <ul className="pt-4">
            <Link to="/confidentialites"><li className="pb-2">Politique de confidentialité RGPD</li></Link>
            <Link to="/remboursement"><li className="pb-2">Politique de remboursement</li></Link>
            <Link to='/condition'><li className="pb-2">Conditions générales de vente CGV</li></Link>
            <Link to='/mentions'><li className="pb-2">Mentions légales</li></Link>
          </ul>
      </div>
      <div>
        <h1 className="text-lg font-semibold border-b-2 w-20">Contact</h1>
          <ul className="pt-4">
            <li className="pb-2">Florentin Fallon alias <strong>Codev</strong></li>
            <li className="pb-2">codedev33@gmail.com</li>
            <li className="pb-2">07.69.97.10.07</li>
          </ul>
      </div>
    </div>
    <div className="bg-indigo-500">
      <p className="text-center text-sm p-4 text-white border-t-2">© 2024 <Link to="/">Codev</Link> - Tous droits réservés</p>
    </div>
    </div>
  );
}

export default FooterComponent;