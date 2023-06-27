import React from 'react'
import { Div } from './Styled'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SideBarR from '../SideBarR/SideBarR'
import SideBarL from '../SideBarL/SideBarL'
import Card from '../Card/Card'
import NavBar from '../NavBar/NavBar'


const Home = () => {
  return (
    <Div>
        <Header/>
        <NavBar/>
        <SideBarR/>
        <Card/>
        <Footer/>
    </Div>
  )
}

export default Home