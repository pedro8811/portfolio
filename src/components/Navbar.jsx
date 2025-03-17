import { Button } from '@mui/material'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark b-dark fixed-top'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          Pedro
          <span style={{ color: 'var(--brand-text-secondary)' }}> Henrique</span>
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
              <Button variant='text' className='nav-link' href='#sobre'>
                Sobre
              </Button>
            </li>
            <li className='nav-item'>
              <Button variant='text' className='nav-link' href='#habilidades'>
                Habilidades
              </Button>
            </li>
            <li className='nav-item'>
              <Button variant='text' className='nav-link' href='#trabalhos'>
                Trabalhos
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
