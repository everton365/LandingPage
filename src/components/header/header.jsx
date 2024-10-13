import React from "react";
import { Link } from "react-router-dom"; // Adicione o import do Link

function Header() {
  return (
    <div className="bg-gray-900 text-white min-h-16">
      <div className="title1">
        <h1>
          Portfólio.<span>index</span>
        </h1>
      </div>

      <div className="statusbar">
        <button>Início</button>
        <button>Sobre Mim</button>
        <button>Serviços</button>

        {/* Use o Link corretamente */}
        <Link to="/sobreMim">
          <button>Habilidades</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
