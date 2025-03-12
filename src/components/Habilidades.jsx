const Habilidades = () => {
  return (
    <section id='habilidades' className='py-5 b-dark text-white'>
      <div className='container'>
        <h2 className='text-center mb-4'>Habilidades Técnicas</h2>
        <div className='row g-5 m-0 p-0'>
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
                  <li>Vite</li>
                  <li>Git</li>
                  <li>Axios</li>
                  <li>Babel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Habilidades
