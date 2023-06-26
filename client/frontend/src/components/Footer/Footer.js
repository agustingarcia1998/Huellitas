import React from 'react'
import { Div } from './Styled'
import img from '../../file/patitas.png'
const Footer = () => {
  return (
    <Div>
    <footer >
      <div className='contFooter'>
        <div>
          <a>Inicio</a>
          <p>Contactanos</p>
          <a>Instagram</a>
          <p>Whatsapp</p>
        </div>
        <div>
          <img src={img} className='image'/>
        </div>
        <div>
          <p>Ambrosio olmos 1044</p>
        </div>
      </div>
      <p>Hecho con ❤🐾 por <a href='https://www.linkedin.com/in/agustin-garcia-716865228/'>Agustin</a></p>
    </footer>
    </Div>
  )
}

export default Footer