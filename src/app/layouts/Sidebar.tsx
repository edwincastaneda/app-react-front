const Sidebar: React.FC = () => {
    return (
        <nav className="bg-dark text-white p-3 d-flex flex-column" style={{ width: '250px' }}>
            <h4 className="text-center mb-4">Menú</h4>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Dashboard</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Perfil</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Configuración</a>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;