import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import './Login.css';

export default function Login({ initialMode = 'login' }) {
  const { login, register, error, setError } = useContext(AuthContext);
  const [mode, setMode] = useState(initialMode);
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mode === 'login') {
      login(form);
    } else {
      register(form);
    }
  };

  return (
    <div className="login-page">
      <div className="login-panel">
        <h1>{mode === 'login' ? 'Iniciar sesión' : 'Registro'}</h1>
        <p>Usa cualquier usuario para probar la autenticación local y acceder al portfolio premium.</p>
        <form onSubmit={handleSubmit}>
          <label>
            Usuario
            <input
              value={form.username}
              onChange={(e) => { setForm({ ...form, username: e.target.value }); setError(''); }}
              placeholder="Tu nombre"
            />
          </label>
          <label>
            Contraseña
            <input
              type="password"
              value={form.password}
              onChange={(e) => { setForm({ ...form, password: e.target.value }); setError(''); }}
              placeholder="Tu contraseña"
            />
          </label>
          {error && <p className="login-error">{error}</p>}
          <button type="submit">{mode === 'login' ? 'Ingresar' : 'Registrar'}</button>
        </form>
        <button type="button" className="login-switch" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
          {mode === 'login' ? 'Crear una cuenta' : 'Ya tengo cuenta'}
        </button>
      </div>
      <div className="login-preview">
        <h2>Bienvenido a mi portfolio</h2>
        <p>Revisa mis proyectos de Data, mis gráficos y deja un mensaje si quieres colaborar.</p>
        <div className="login-video-placeholder">Video aquí</div>
      </div>
    </div>
  );
}
