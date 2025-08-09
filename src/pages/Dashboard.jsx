import React, { useEffect, useState } from 'react';
import CentroCulturalCard from '../components/CentroCulturalCard';
import Header from '../components/Header';
import './Dashboard.css';

const Dashboard = () => {
  const [centros, setCentros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/centros') // Ajusta la URL si es necesario
      .then(res => {
        if (!res.ok) throw new Error('Error al obtener centros culturales');
        return res.json();
      })
      .then(data => {
        setCentros(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando centros culturales...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Header />
      <div className="dashboard">
        {centros.map((centro) => (
          <CentroCulturalCard
            key={centro.id || centro.nombre} // usa un id único si tienes
            nombre={centro.nombre}
            descripcion={centro.descripcion}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

