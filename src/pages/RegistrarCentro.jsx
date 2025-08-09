import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Forms.css'; // importa los estilos

const RegistrarCentro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    direccion: '',
    contacto: '',
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
      const res = await fetch('http://localhost:5000/api/centros', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Error al registrar centro cultural');

      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Registrar Centro Cultural</h2>
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
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={formData.direccion}
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
          type="text"
          name="contacto"
          placeholder="Contacto"
          value={formData.contacto}
          onChange={handleChange}
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegistrarCentro;
