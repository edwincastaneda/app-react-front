
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface MainLayoutWithSidebarProps {
    children: React.ReactNode;
    onLogout: () => void;
}

const MainLayoutWithSidebar: React.FC<MainLayoutWithSidebarProps> = ({ children, onLogout }) => {

    return (
        <div className="d-flex min-vh-100">
            <div className="d-none d-lg-flex flex-column flex-shrink-0 bg-primary text-white" style={{ width: 'var(--sidebar-width)' }}>
                <Sidebar />
            </div>
            <div className="d-flex flex-column w-100">
                <Header onLogout={onLogout} isLoggedIn={true}/>
                <main className="container-fluid my-4 flex-grow-1">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayoutWithSidebar;