import './assets/global.css'
import multi from './assets/site-multi.png'
import aguia from './assets/aguia.png'
import crm from './assets/crm.png'

function App() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            Portfólio
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='#sobre'>
                  Sobre
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#habilidades'>
                  Habilidades
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#trabalhos'>
                  Trabalhos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className='bg-dark text-white text-center py-5 mt-5'>
        <div className='px-4 px-lg-5 my-5'>
          <div className='text-center'>
            <h1 className='display-4 fw-bolder'>Desenvolvedor Front-end</h1>
            <p className='lead fw-normal text-white-50 mb-0'>
              Especializado em React e Tecnologias Web Modernas
            </p>
            <div className='mt-4'>
              <a href='#' className='btn btn-outline-light me-2' target='_blank'>
                GitHub
              </a>
              <a href='#' className='btn btn-outline-light' target='_blank'>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id='sobre' className='py-5'>
        <div className='container'>
          <h2 className='text-center mb-4'>Sobre Mim</h2>
          <div className='row'>
            <div className='col-lg-8 mx-auto'>
              <p className='lead'>
                No segundo semestre de 2024, finalizei minha graduação em Sistemas de Informação. Ao
                longo do curso, desenvolvi habilidades que vão muito além do currículo acadêmico,
                com foco especial em tecnologias front-end.
              </p>
              <p>
                Atualmente, React é minha principal tecnologia de trabalho, complementada por
                sólidos conhecimentos em Bootstrap, HTML semântico, ECMAScript 2021 e CSS.
              </p>
              <p>
                Para 2025, meu objetivo é aprofundar continuamente meus conhecimentos em
                programação. Além de acompanhar as tecnologias emergentes, pretendo me especializar
                em arquiteturas de software avançadas e boas práticas de desenvolvimento web.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='habilidades' className='py-5 bg-dark text-white'>
        <div className='container'>
          <h2 className='text-center mb-4'>Habilidades Técnicas</h2>
          <div className='row g-4'>
            <div className='col-md-4'>
              <div className='card h-100'>
                <div className='card-body'>
                  <h5 className='card-title'>Front-end</h5>
                  <ul className='list-unstyled'>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>HTML5 Semântico</li>
                    <li>CSS3/Sass</li>
                    <li>JavaScript/ES2021</li>
                    <li>Styled-components</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card h-100'>
                <div className='card-body'>
                  <h5 className='card-title'>Back-end</h5>
                  <ul className='list-unstyled'>
                    <li>Python</li>
                    <li>Flask</li>
                    <li>PHP</li>
                    <li>MySQL</li>
                    <li>SQLite</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card h-100'>
                <div className='card-body'>
                  <h5 className='card-title'>Ferramentas</h5>
                  <ul className='list-unstyled'>
                    <li>Webpack</li>
                    <li>Git</li>
                    <li>jQuery</li>
                    <li>Ajax</li>
                    <li>Babel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='trabalhos' className='py-5'>
        <div className='container'>
          <h2 className='text-center mb-4'>Meus Trabalhos</h2>
          <div className='row g-4'>
            <div className='col-lg-4 col-md-6'>
              <div className='card h-100'>
                <img src={multi} className='card-img-top' alt='Projeto 1' />
                <div className='card-body'>
                  <h5 className='card-title'>Site Multi Imobiliária</h5>
                  <p className='card-text'>
                    Site imobiliário desenvolvido em React com interface responsiva, sistema de
                    busca e filtragem de imóveis. Utiliza Material UI e Bootstrap para estilização e
                    componentes reutilizáveis.
                  </p>
                  <a href='https://www.multi.com.br/' className='btn btn-primary'>
                    Ver Projeto
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='card h-100'>
                <img src={aguia} className='card-img-top' alt='Projeto 2' />
                <div className='card-body'>
                  <h5 className='card-title'>Site Águia Seguros</h5>
                  <p className='card-text'>
                    Landing page para corretora de seguros com design clean e responsivo.
                    Desenvolvida com HTML, CSS e Bootstrap, focando em alta conversão e experiência
                    do usuário.
                  </p>
                  <a href='https://www.aguiaseguros.com/' className='btn btn-primary'>
                    Ver Projeto
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='card h-100'>
                <img src={crm} className='card-img-top' alt='Projeto 3' />
                <div className='card-body'>
                  <h5 className='card-title'>CRM para imobiliária</h5>
                  <p className='card-text'>
                    CRM completo para corretores imobiliários com gerenciamento de imóveis, clientes
                    e leads. Desenvolvido em React com dashboard interativo e sistema de
                    notificações
                  </p>
                  <a href='https://web.multi.com.br/' className='btn btn-primary'>
                    Ver Projeto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className='py-4 bg-dark text-white'>
        <div className='container'>
          <div className='text-center'>
            <p className='mb-0'>&copy; 2025 Meu Portfólio. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
