import React, { useState } from 'react';

const RegistrarTaller = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/talleres', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, descripcion }),
      });
      if (!res.ok) throw new Error('Error al registrar taller');
      setMensaje('Taller registrado con éxito');
      setNombre('');
      setDescripcion('');
    } catch (error) {
      setMensaje(error.message);
    }
  };

  return (
    <div>
      <h2>Registrar Taller</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del taller"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
        <button type="submit">Registrar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default RegistrarTaller;
