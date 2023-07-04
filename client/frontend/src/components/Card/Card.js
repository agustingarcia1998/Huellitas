import React from 'react'
import { Div } from './Styled'

const Card = ({name, description, age, size, img}) => {
  return (
    <Div>
        <img src={img}/>
        <h2>{name}</h2>
        <h3>{description}</h3>
        <h3>{age}</h3>
    </Div>
  )
}

export default Card
