import React from 'react';

import { Container } from './styles';

function Add() {
  return (
    <Container>
      <form className="container-mt-5">
        <div className="form-group">
          <label>Nome</label>
          <input
            type="text"
            name="Nome..."
            className="form-control"
            placeholder="Url"
          ></input>
        </div>
        <div className="form-group">
          <label>Url:</label>
          <input
            type="text"
            name="url"
            className="form-control"
            placeholder="Url"
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Adicionar
        </button>
      </form>
    </Container>
  );
}

export default Add;
