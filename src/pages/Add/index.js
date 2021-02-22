import React, { useState } from 'react';
import { Container } from './styles';

import { addCar } from '../../store/cars';
import { useDispatch } from 'react-redux';
import { Types, Creators } from '../../store/layout';

function Add() {
  const [form, setForm] = useState({ name: '', url: '' });
  const d = useDispatch();

  function formChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    d(addCar(form));
    setForm({ name: '', url: '' });
    d(Creators.showMessage());
    setTimeout(() => {
      d(Creators.hideMessage());
    }, 2500);
  }
  return (
    <Container>
      <div className="container">
        <div className="jumbotron">
      <form className="container-mt-5" onSubmit={onSubmit}>
        <div className="form-group">
          <label>Nome</label>
          <input
            onChange={formChange}
            type="text"
            name="name"
            className="form-control"
            placeholder="Nome"
            value={form.name}
          ></input>
        </div>
        <div className="form-group">
          <label>Url:</label>
          <input
            onChange={formChange}
            type="text"
            name="url"
            className="form-control"
            placeholder="Url"
            value={form.url}
          ></input>
        </div>

        <button type="submit" className="btn btn-primary">
          Adicionar
        </button>
      </form>
      </div>
      </div>
    </Container>
  );
}

export default Add;
