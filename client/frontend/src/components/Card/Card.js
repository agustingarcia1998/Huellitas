import React from 'react'
import { Div } from './Styled'

const Card = ({name, description, age, size, img}) => {
  return (
    <Div>
        <img src={img}/>
        <h2>Nombre: {name}</h2>
        <h4>Info: {description}</h4>
        <h4>Edad: {age}</h4>
        <h4>Tamaño: {size}</h4>
    </Div>
  )
}

export default Card
