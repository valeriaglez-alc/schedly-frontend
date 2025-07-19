import React from 'react';
import CentroCulturalCard from '../components/CentroCulturalCard';
import Header from '../components/Header';
import './Dashboard.css';

const centros = [
  { nombre: 'Ortográfika', descripcion: 'Centro cultural enfocado en diseño y arte.' },
  { nombre: 'Mercado Bola', descripcion: 'Espacio comunitario con talleres y exposiciones.' },
  { nombre: 'Mixcoacalli', descripcion: 'Centro cultural con enfoque en teatro y danza.' },
  { nombre: 'Cultural Centenario', descripcion: 'Promueve la cultura local y tradicional.' },
  { nombre: 'Casa Iteso', descripcion: 'Iniciativa de la universidad con eventos educativos.' },
  { nombre: 'Casa Iteso', descripcion: 'Otro punto de encuentro para la comunidad estudiantil.' },
];

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="dashboard">
        {centros.map((centro, index) => (
          <CentroCulturalCard
            key={index}
            nombre={centro.nombre}
            descripcion={centro.descripcion}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
