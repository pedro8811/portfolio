import multi from '../assets/site-multi.png'
import aguia from '../assets/aguia.png'
import crm from '../assets/crm.png'
import { Button } from '@mui/material'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Trabalhos = () => {
  return (
    <section id='trabalhos' className='py-5'>
      <div className='container'>
        <h2 className='text-center mb-4'>Meus Trabalhos</h2>
        <div className='row g-5 m-0 p-0'>
          <div className='col-lg-4 col-md-6'>
            <div className='card h-100'>
              <img src={multi} className='card-img-top' alt='Projeto 1' />
              <div className='card-body'>
                <h5 className='card-title'>Site Multi Imobiliária</h5>
                <p className='card-text'>
                  Site imobiliário desenvolvido em React com interface responsiva, sistema de busca
                  e filtragem de imóveis. Utiliza Material UI e Bootstrap para estilização e
                  componentes reutilizáveis.
                </p>
              </div>
              <div className='d-flex justify-content-end card-footer'>
                <Button
                  target='_blank'
                  href='https://www.multi.com.br/'
                  className='btn btn-primary d-flex align-items-center'
                >
                  Visitar <FaExternalLinkAlt className='ms-2 mb-1' />
                </Button>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className='card h-100'>
              <img src={aguia} className='card-img-top' alt='Projeto 2' />
              <div className='card-body'>
                <h5 className='card-title'>Site Águia Seguros</h5>
                <p className='card-text'>
                  Landing page para corretora de seguros com design clean e responsivo. Desenvolvida
                  com HTML, CSS e Bootstrap, focando em alta conversão e experiência do usuário.
                </p>
              </div>
              <div className='card-footer'>
                <div className='d-flex justify-content-end'>
                  <Button
                    target='_blank'
                    href='https://www.aguiaseguros.com/'
                    className='btn btn-primary d-flex align-items-center'
                  >
                    Visitar <FaExternalLinkAlt className='ms-2 mb-1' />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className='card h-100'>
              <img src={crm} className='card-img-top' alt='Projeto 3' />
              <div className='card-body'>
                <h5 className='card-title'>CRM para imobiliária</h5>
                <p className='card-text'>
                  CRM completo para corretores imobiliários com gerenciamento de imóveis, clientes e
                  leads. Desenvolvido em React com dashboard interativo e sistema de notificações
                </p>
              </div>
              <div className='card-footer'>
                <div className='d-flex justify-content-end'>
                  <Button
                    target='_blank'
                    href='https://web.multi.com.br/'
                    className='btn btn-primary disabled'
                  >
                    Privado
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trabalhos
