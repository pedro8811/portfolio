import { Button } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'

const fonts = [
  // 'Arial, sans-serif',
  // 'Inter, sans-serif',
  // 'Montserrat, sans-serif',
  // 'Times New Roman, serif',
  'Pacifico, sans-serif',
]

const Header = () => {
  const [fontIndex, setFontIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((prevIndex) => (prevIndex + 1) % fonts.length)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <header className='b-dark text-white text-center py-5 mt-5'>
      <div className='container my-5'>
        <div className='row align-items-center'>
          <h1 style={{ fontFamily: fonts[fontIndex] }} className='floating title col-lg-4'>
            Pedro
            <span style={{ color: 'var(--brand-text-secondary)' }}> Henrique</span>
          </h1>
          <div className='col-lg-8'>
            <p className='subtitle mb-0'>
              Desenvolvedor Front-end com experiência em React e Tecnologias Web Modernas
            </p>
            <Button href='#trabalhos' className='btn btn-secondary'>
              Conheça meu trabalho
            </Button>
            {/* <div>
                <a
                  href='https://github.com/pedro8811'
                  className='btn btn-outline-light me-2'
                  target='_blank'
                >
                  <FaGithub />
                </a>
                <a
                  href='https://www.linkedin.com/in/pedro-henrique-ferreira-matos-4b2b981b8/'
                  className='btn btn-outline-light'
                  target='_blank'
                >
                  <FaLinkedin />
                </a>
              </div> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
