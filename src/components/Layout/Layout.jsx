import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Footer from '../Footer/Footer.jsx';
import './Layout.css';

export default function Layout() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="app-main">
        <div className="page-content">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}
