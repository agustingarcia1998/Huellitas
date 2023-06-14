import React from 'react'
import { Div } from './Styled.js'
import image from '../../file/fotoheader.jpeg'
const Header = () => {
  return (
    <Div>
    {/* <h1 className='title'>Patitas del sur</h1>
    <h2 className='subTitle'>Refugio animal</h2> */}
    <img src={image} className='image' alt='Image not found'/>
    {/* <p className='desc'>aca va ir algun mensajito</p>
    <p>otras cosas</p>
    <p>otras cosas</p>
    <p>otras cosas</p> */}

    </Div>
  )
}

export default Header