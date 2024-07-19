
import React, {useEffect,useState  } from 'react';
import Lottie from 'react-lottie';
import './index.css';
import animation from './components/animações/Animation.json';
import animation1 from './components/animações/Animation1.json';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animation1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    // Função para gerar coordenadas aleatórias entre 0 e 100%
    function starPosition() {
      return Math.floor(Math.random() * 100) + "%";
    }
    
    // Seleciona todas as estrelas após o componente ser montado
    const stars = document.querySelectorAll(".star");
    
    // Move cada estrela para uma posição aleatória inicial
    stars.forEach(function(star) {
      star.style.top = starPosition();
      star.style.left = starPosition();
    });
    
    // Função para mover as estrelas aleatoriamente a cada segundo
    const interval = setInterval(function() {
      stars.forEach(function(star) {
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
    <section class="profile-section">
     <img src="/Imagem2.jpg" alt="imagem de uma galaxia!" width="200px" height="200px"/>
     <img src="/image/Imagem2.jpg" alt="imagem de uma galaxia!" width="200px" height="200px"/>
     <div className='digito'>
    <h1 className='digite'>EVERTON SILVA</h1>
    
    <h2 className='digite1'>Desenvolvedor FullStack</h2>
    
    </div>
  
    <div class="star star1"></div><div class="star star2"></div><div class="star star2"></div>
    <div class="star star3"></div><div class="star star4"></div><div class="star star5"></div>
    <div class="star star6"></div><div class="star star3"></div><div class="star star4"></div>
    <div class="star star5"></div><div class="star star6"></div><div class="star star3"></div>
    <div class="star star4"></div><div class="star star5"></div><div class="star star6"></div>
   
    </section>
    
    </header>
   

    <main>
    <section className="info-section">
      <div>
      <h2>Bem-vindo à Minha<br/> Página de Projetos</h2>
      
      <Lottie
        options={defaultOptions}
        height={200}
        width={200} 
      />
    </div>
      <divi className="text">
      <p>Eu sou Everton Silva, um profissional da programação com paixão por</p>
      
      <p>criar soluções inovadoras e eficientes. Nesta página, você encontrará </p>
      
      <p>uma coleção de meus projetos mais recentes, abrangendo diversas  </p>
      <p>áreas da tecnologia e programação.</p><br/>
      <p>Aplicações web interativas, algoritmos. cada projeto reflete</p>
      <p> meu compromisso com a excelência e minha dedicação ao</p>
      <p>desenvolvimento contínuo de habilidades. Navegue pelos projetos  </p>
      <p>explore o código-fonte e veja como as ideias se transformam  </p>
      <p>em realidade através da programação.</p>
      <p>Obrigado por visitar minha página de projetos.</p>
     </divi>
    
    </section>
    
 <h2 id='title'>Atividades práticas</h2>
    <section className="praticas">
     
      <div className='link'>
      <a href="./src/desafio/desafio.html">Projeto formulários</a>
      <a href="./src/ex02/ex02.html">Projeto receita</a>
      <a href="./src/pratica03/pratica3.html">Projeto tabela</a>
      </div>
      <div className='animação'>
      
      <Lottie
        options={defaultOptions1}
        height={200}
        width={200}
      />
    </div>
      
    </section>
    </main>
    <footer>
      <section className='footer'>
        <divi>
        <p>&copy; 2024 ewernoute. Todos os direitos reservados.</p>
        </divi>
      </section>
    </footer>
    </div>
    
  );
}

export default App;
