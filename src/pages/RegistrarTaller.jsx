import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forms.css';

const RegistrarTaller = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    fecha: '',
    lugar: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch('http://localhost:5000/api/talleres', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Error al registrar taller');

      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Registrar Taller</h2>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleChange}
          rows="3"
        />
        <input
          type="date"
          name="fecha"
          placeholder="Fecha"
          value={formData.fecha}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lugar"
          placeholder="Lugar"
          value={formData.lugar}
          onChange={handleChange}
          required
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegistrarTaller;

