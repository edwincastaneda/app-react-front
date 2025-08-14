
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayoutWithSidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // @ts-ignore
    return (
        <div className="d-flex min-vh-100">
            {/* Sidebar - se oculta en pantallas pequeñas con d-none y se muestra en lg con d-lg-flex */}
            <div className="d-none d-lg-flex flex-column flex-shrink-0 bg-dark text-white" style={{ width: '250px' }}>
                <Sidebar />
            </div>
            {/* Contenido principal */}
            <div className="d-flex flex-column w-100">
                <Header />
                <main className="container-fluid my-4 flex-grow-1">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayoutWithSidebar;