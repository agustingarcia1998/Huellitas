import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { catsFetch } from '../../redux/actions/cats.actions'
import Card from '../Card/Card';


const Lists = () => {
    const dispatch = useDispatch();
    const cats = useSelector((state) => state.cats)
    
    useEffect(() => {
        catsFetch(dispatch)
    }, [])

  return (
    <div>
        {cats.currentCat?.map( (cat) => 
        <div key={cat.id}>
            <Card name={cat.name} age={cat.age} description={cat.description} size={cat.size} img={cat.thumbnail}/>
        </div> )}
    </div>
  )
}

export default Lists