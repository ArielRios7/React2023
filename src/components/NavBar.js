import React from 'react'
import CartWidget from './CartWidget'

function NavBar(props) {
    return (
      <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <div class="container-fluid">
      <img src="../../logo.png" alt="Logo" width="30" height="24"/>
  </div>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Home</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Cursos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contacto</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
  <div>
  <CartWidget/>
  </div>
</nav>
    </>
    )
}

export default NavBar