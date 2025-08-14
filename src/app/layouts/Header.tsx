

interface HeaderProps {
    onLogout: () => void;
    isLoggedIn: boolean;
}


const Header: React.FC<HeaderProps> = ({ onLogout, isLoggedIn }) => {
    return (
        <header className="bg-primary text-white p-3 d-flex justify-content-between align-items-center">
            <h2>Mi Aplicación</h2>
            {isLoggedIn && (
                <button onClick={onLogout} className="btn btn-outline-light">
                    Cerrar Sesión
                </button>
            )}
        </header>

    );
};

export default Header;