import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import "./index.css";

import {
  getDefaultOptions,
  getDefaultOptions1,
  getDefaultOptions3,
  getDefaultOptions4,
  getDefaultOptions5,
  getDefaultOptions6,
  getDefaultOptions7,
  getDefaultOptions8,
  getDefaultOptions9,
} from "./animaçães.js";

function App() {
  const defaultOptions = getDefaultOptions();
  const defaultOptions1 = getDefaultOptions1();
  const defaultOptions3 = getDefaultOptions3();
  const defaultOptions4 = getDefaultOptions4();
  const defaultOptions5 = getDefaultOptions5();
  const defaultOptions6 = getDefaultOptions6();
  const defaultOptions7 = getDefaultOptions7();
  const defaultOptions8 = getDefaultOptions8();
  const defaultOptions9 = getDefaultOptions9();

  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Função para gerar coordenadas aleatórias entre 0 e 100%
    function starPosition() {
      return Math.floor(Math.random() * 100) + "%";
    }

    // Seleciona todas as estrelas após o componente ser montado
    const stars = document.querySelectorAll(".star");

    // Move cada estrela para uma posição aleatória inicial
    stars.forEach(function (star) {
      star.style.top = starPosition();
      star.style.left = starPosition();
    });

    // Função para mover as estrelas aleatoriamente a cada segundo
    const interval = setInterval(function () {
      stars.forEach(function (star) {
        star.style.top = starPosition();
        star.style.left = starPosition();
      });
    }, 1000); // Movimento a cada segundo

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []); // Array vazio para garantir que o useEffect execute apenas uma vez

  return (
    <div className="body">
      <header>
        <div className="title1">
          <h1>
            Portifólio.<span>index</span>
          </h1>
        </div>
        <div className="statusbar">
          <button>Inicio</button>
          <button>sobre mim</button>
          <button>serviços</button>
          <button>Habilidades</button>
        </div>
        <section class="profile-section">
          <img src="./image/Imagem2.jpg" alt="" width="200px" height="200px" />
          <div className="digito">
            <h1 className="digite">
              EVERTON <span> SILVA</span>
            </h1>

            <h2 className="digite1">{"<Desenvolvedor FullStack>"}</h2>
          </div>

          <div class="star star1"></div>
          <div class="star star2"></div>
          <div class="star star2"></div>
          <div class="star star3"></div>
          <div class="star star4"></div>
          <div class="star star5"></div>
          <div class="star star6"></div>
          <div class="star star3"></div>
          <div class="star star4"></div>
          <div class="star star5"></div>
          <div class="star star6"></div>
          <div class="star star3"></div>
          <div class="star star4"></div>
          <div class="star star5"></div>
          <div class="star star6"></div>
        </section>
      </header>

      <main>
        <section className="info-section">
          <div>
            <h2>
              Bem-vindo à Minha
              <br /> Página de Projetos
            </h2>

            <Lottie options={defaultOptions} height={200} width={200} />
          </div>
          <divi className="text">
            <h4>Sobre</h4>
            <p>
              Eu sou Everton Silva, um profissional da programação com paixão
              por
            </p>

            <p>
              criar soluções inovadoras e eficientes. Nesta página, você
              encontrará{" "}
            </p>

            <p>
              uma coleção de meus projetos mais recentes, abrangendo diversas{" "}
            </p>
            <p>áreas da tecnologia e programação.</p>
            <br />
            <p>Aplicações web interativas, algoritmos. cada projeto reflete</p>
            <p> meu compromisso com a excelência e minha dedicação ao</p>
            <p>
              desenvolvimento contínuo de habilidades. Navegue pelos projetos{" "}
            </p>
            <p>explore o código-fonte e veja como as ideias se transformam </p>
            <p>em realidade através da programação.</p>
            <p>Obrigado por visitar minha página de projetos.</p>
          </divi>
        </section>
        <section className="mobile">
          <div className="logoTec">
            <h4>Skills</h4>
            <Lottie options={defaultOptions3} height={50} width={50} />
            <Lottie options={defaultOptions4} height={50} width={50} />
            <Lottie options={defaultOptions5} height={50} width={50} />
            <Lottie options={defaultOptions6} height={50} width={50} />
            <Lottie options={defaultOptions7} height={50} width={50} />
            <Lottie options={defaultOptions8} height={50} width={50} />
            <Lottie options={defaultOptions9} height={50} width={50} />
          </div>
        </section>
        <h2 id="title">Atividades práticas</h2>
        <section className="praticas">
          <div className="link">
            <h3>Projeto formulários</h3>
            <div className="text-bnt">
              <p>Apresento um projeto de</p>
              <p>formulário em HTML,</p>
              <p> desenvolvido para explorar</p>
              <p> conceitos básicos de</p>
              <p>criação e estruturação de</p>
              <p> formulários na web.</p>
            </div>
            <button>ver projeto</button>
          </div>
          <div className="link">
            <h3>Projeto Receita</h3>
            <div className="text-bnt">
              <p>Apresento um projeto</p>
              <p>combinando HTML e CSS, </p>
              <p>focado em criar um layout </p>
              <p>responsivo e conceitos</p>
              <p>básicos de estilizado para</p>
              <p>demonstrar a integração dessas</p>
              <p>tecnologias na construção </p>
              <p>de páginas web.</p>
            </div>
            <button>ver projeto</button>
          </div>
          <div className="link">
            <h3>Projeto Tabela</h3>
            <div className="text-bnt">
              <p>Apresento um projeto de</p>
              <p>abelas em HTML, desenvolvido</p>
              <p>para explorar a estruturação e </p>
              <p>formatação de dados tabulares</p>
              <p>de maneira clara e organizada</p>
              <p>na web.</p>
            </div>
            <button>ver projeto</button>
          </div>
          <div className="animação">
            <Lottie options={defaultOptions1} height={200} width={200} />
          </div>
        </section>
      </main>
      <footer>
        <section className="footer">
          <divi>
            <p>&copy; 2024 ewernoute. Todos os direitos reservados.</p>
          </divi>
        </section>
      </footer>
    </div>
  );
}

export default App;
