import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Por favor completa todos los campos');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || 'Credenciales incorrectas');
        return;
      }

      localStorage.setItem('usuario', JSON.stringify(data.usuario));
      localStorage.setItem('token', data.token);

      navigate('/Dashboard');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al conectar con el servidor');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <img src="/Schedly.svg" alt="Logo Schedly" style={styles.logo} />
        <form style={styles.form} onSubmit={handleLogin}>
          <h2 style={styles.title}>Inicia Sesión</h2>

          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />

          <label style={styles.label}>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Iniciar sesión
          </button>

          <p style={styles.register}>
            ¿No tienes una cuenta?{' '}
            <Link to="/register" style={styles.link}>
              Regístrate aquí
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: `'Afacad', 'Century Gothic', sans-serif`,
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#737373',
    padding: '2rem',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: '160px',
    marginBottom: '2rem',
  },
  form: {
    display: 'block',
    textAlign: 'left',
    padding: '2rem',
    border: '2px solid #0097b2',
    borderRadius: '20px',
    maxWidth: '360px',
    width: '100%',
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    color: '#737373',
    fontWeight: 'bold',
  },
  label: {
    display: 'block',
    marginBottom: '0.2rem',
    fontWeight: 'bold',
    color: '#737373',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontFamily: `'Afacad', 'Century Gothic', sans-serif`,
    color: '#737373',
  },
  button: {
    width: '100%',
    padding: '0.7rem',
    backgroundColor: '#0097b2',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  register: {
    marginTop: '1rem',
    fontSize: '0.9rem',
    textAlign: 'center',
    color: '#737373',
  },
  link: {
    color: '#0097b2',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Login;
