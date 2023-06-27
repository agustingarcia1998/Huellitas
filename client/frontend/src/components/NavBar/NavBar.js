import React from 'react'
import { Div } from './Styled'


const NavBar = () => {
  return (
    <Div>
        <nav className="cont-nav navbar navbar-expand-lg bg-body-tertiary">
  <div className="nav-test container-fluid">
    {/* <a className="navbar-brand" href="#">Adoptá</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navs-sections navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Quiero ser provi</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Sobre nosotros</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Animales en adopción
          </a>
          <ul className="cont-dropdown dropdown-menu">
            <li><a className="dropdown-item" href="#">Gatos</a></li>
            <li><a className="dropdown-item" href="#">Perros</a></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
            {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Nombre" aria-label="Search"/>
        <button className="btn-search btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
    </Div>
  )
}

export default NavBar