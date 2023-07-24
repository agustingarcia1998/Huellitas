import React from 'react'
import { Div } from './Styled'

const Card = ({name, description, age, size, status, img}) => {
  return (
    <Div>
        <img src={img} alt='Image not found'/>
        <h3>Nombre: {name}</h3>
        {/* <h4>Info: {description}</h4> */}
        <h4>Edad: {age}</h4>
        {/* <h4>Tamaño: {size}</h4> */}
        <h4>Estado: {status}</h4>


    </Div>
  )
}

export default Card
