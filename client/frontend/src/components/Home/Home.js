import React from 'react'
import { Div } from './Styled'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SideBarR from '../SideBarR/SideBarR'
import SideBarL from '../SideBarL/SideBarL'
import Card from '../Card/Card'


const Home = () => {
  return (
    <Div>
        <Header/>
        <div className='sideBar'>
        <SideBarL/>
        <Card/>
        <SideBarR/>
        </div>
        <Footer/>
    </Div>
  )
}

export default Home