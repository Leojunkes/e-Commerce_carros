import React from 'react';
import Car from '../../components/Car';
import { useSelector } from 'react-redux';
import { Container } from './styles';

function List() {
  const { cars } = useSelector((state) => state);

  return (
    <Container>
      <div className="container-fluid">
        <div className="row">
          {cars.map((car, index) => (
            <Car key={index} car={car} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default List;
