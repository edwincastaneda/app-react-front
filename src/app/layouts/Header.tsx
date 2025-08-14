
const Header: React.FC = () => {
    return (
        <header className="bg-primary text-white p-3 d-flex justify-content-between align-items-center">
            <h2>Mi Aplicación</h2>
            <button className="btn btn-light d-lg-none">☰</button> {/* Botón para el sidebar en móvil */}
        </header>
    );
};

export default Header;