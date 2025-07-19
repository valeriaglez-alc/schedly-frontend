import React from 'react';
import './CentroCulturalCard.css';

const CentroCulturalCard = ({ nombre, descripcion }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
      </div>
    </div>
  );
};

export default CentroCulturalCard;
