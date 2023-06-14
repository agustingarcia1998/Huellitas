import React from 'react'
import { Div } from './Styled'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SideBarR from '../SideBarR/SideBarR'
import SideBarL from '../SideBarL/SideBarL'


const Home = () => {
  return (
    <Div>
        <Header/>
        <div className='sideBar'>
        <SideBarL/>
        <SideBarR/>
        </div>
        {/* <Footer/> */}
    </Div>
  )
}

export default Home