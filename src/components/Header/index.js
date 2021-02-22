import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <nav class="navbar navbar-expand-md navbar-light">
        <div class="container-fluid">
          <NavLink style={{ color: 'white', fontSize:16 }} className="navbar-brand" to="/list"activeClassName="active">
            Shopping Car
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mr-3">
              <li class="nav-item">
                <NavLink
                  style={{ color: 'white'}}
                  class="nav-link active "
                  aria-current="page"
                  to="/list"
                >
                  Listar
                  
                </NavLink>
              </li>
              <li class="nav-item ml-3">
                <NavLink style={{ color: 'white' }} class="nav-link " to="/add">
                  Adicionar
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <NavLink to="/cart">
          <i
            style={{ fontSize: 25, color: 'white' }}
            class="fas fa-shopping-cart"
          >
            <span className="fa-counter">0</span>
          </i>
        </NavLink>
      </nav>
    </Container>
  );
}

export default Header;
