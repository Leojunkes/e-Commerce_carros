import React, { useState } from 'react';
import { Container } from './styles';

import { addCar } from '../../store/cars';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Add() {
  const [form, setForm] = useState({ name: '', url: '' });
  const d = useDispatch();

  function formChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    d(addCar(form));
    console.log(form);
    localStorage.setItem('cars', JSON.stringify(form));
    setForm(form);
  }
  return (
    <Container>
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
        <Link to="/list">
          <button type="submit" className="btn btn-primary">
            Adicionar
          </button>
        </Link>
      </form>
    </Container>
  );
}

export default Add;
