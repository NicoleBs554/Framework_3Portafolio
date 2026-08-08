import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const STORAGE_KEY = 'portfolioUser';
const USERS_KEY = 'portfolioUsers';

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const login = ({ username, password }) => {
    if (!username || !password) {
      setError('Por favor ingresa usuario y contraseña.');
      return false;
    }
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const found = users.find((item) => item.username === username && item.password === password);
    if (!found) {
      setError('Usuario o contraseña incorrectos.');
      return false;
    }
    setError('');
    setUser({ username });
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ username }));
    navigate('/');
    return true;
  };

  const register = ({ username, password }) => {
    if (!username || !password) {
      setError('Completa usuario y contraseña.');
      return false;
    }
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    if (users.some((item) => item.username === username)) {
      setError('El usuario ya existe.');
      return false;
    }
    users.push({ username, password });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    setError('');
    setUser({ username });
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ username }));
    navigate('/');
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, error, login, register, logout, setError }}>
      {children}
    </AuthContext.Provider>
  );
}
