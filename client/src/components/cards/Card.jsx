import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from "./Card.module.css";
import StarRating from '../estrellas/estrellas';
import { Link } from 'react-router-dom';

export default function Cards(props) {
  return (
    <div className="card" style={{ width: '18rem', marginBottom: "20px"}}>
      <Link to={`/detail/${props.id}`}>
      <img className="card-img-top" src={props.imagen} alt="Card image cap" style={{ height: '20rem'}}/>

      </Link>
      <div className="card-body">
        <h3 className={s.titulo}>{props.nombre}</h3>
      </div>
      <ul className="list-group list-group-flush">
    <li className="list-group-item"><StarRating value={props.valoracion}/></li>
    <li className="list-group-item">${props.tarifa}</li>
  </ul>
    </div>
  );
}
