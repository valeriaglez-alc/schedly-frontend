import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import RegistrarCentro from './pages/RegistrarCentro';
import RegistrarTaller from './pages/RegistrarTaller';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/registrar-centro" element={<RegistrarCentro />} />
      <Route path="/registrar-taller" element={<RegistrarTaller />} />
      <Route path="/" element={<Login />} /> {/* ruta por defecto */}
    </Routes>
  );
}

export default App;
