import { NavLink } from 'react-router-dom';
import { Home, User, Code2, LayoutGrid, MessageCircle, LogOut } from 'lucide-react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import './Sidebar.css';

const navItems = [
  { to: '/about', label: 'About', icon: User },
  { to: '/skills', label: 'Skills', icon: LayoutGrid },
  { to: '/portfolio', label: 'Portfolio', icon: Code2 },
  { to: '/contact', label: 'Contact', icon: MessageCircle }
];

export default function Sidebar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="avatar">NB</div>
        <div>
          <p className="brand-name">Nicole B</p>
          <p className="brand-role">Data Portfolio</p>
        </div>
      </div>

      <div className="sidebar-status">
        <span />
        <p>Online</p>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              <Icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <button type="button" className="logout-button" onClick={logout}>
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
}
