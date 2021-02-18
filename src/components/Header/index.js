import React from 'react';
import { Link} from 'react-router-dom';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <nav class="navbar navbar-expand-md navbar-light">
  <div class="container-fluid">
    <a style={{color:'white'}} class="navbar-brand" href="/list">Shopping Car</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a style={{color:'white'}} class="nav-link active" aria-current="page" href="/list">Listar</a>
        </li>
        <li class="nav-item">
          <a style={{color:'white'}} class="nav-link" href="add">Adicionar</a>
        </li>
        
        
      </ul>
    </div>
  </div>
  <Link to="/cart">
  <i style={{fontSize:25, color:'white'}} class="fas fa-shopping-cart">
  <span  className="fa-counter">0</span>
  </i>
  </Link>
  
</nav>

    </Container>
  );
}

export default Header;
