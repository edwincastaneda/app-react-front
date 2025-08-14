const Sidebar: React.FC = () => {
    return (
        <nav className="text-white p-3 d-flex flex-column" style={{ width: 'var(--sidebar-width)' }}>
            <h4 className="text-center mb-4">Menú</h4>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link text-white" href="http://localhost">Dashboard</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="http://localhost">Perfil</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="http://localhost">Configuración</a>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;