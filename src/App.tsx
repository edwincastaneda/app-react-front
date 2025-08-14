import React, {useEffect, useState} from 'react';
import MainLayoutWithSidebar from "./app/layouts/MainLayoutWithSidebar";
import Dashboard from "./app/pages/Dashboard";
import LoginPage from "./app/pages/LoginPage";

const App: React.FC = () => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [authChecked, setAuthChecked] = useState<boolean>(false);


    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsLoggedIn(true);
        }
        setAuthChecked(true);
    }, []);



    const handleLoginSuccess = () => {
        // Al iniciar sesión, guardamos un token en localStorage y actualizamos el estado.
        localStorage.setItem('authToken', 'mi_token_secreto');
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        // Al cerrar sesión, eliminamos el token de localStorage y actualizamos el estado.
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
    };

    // No renderizamos nada hasta que hayamos verificado la autenticación.
    if (!authChecked) {
        return <div>Cargando...</div>;
    }

  return (
      <>
          {isLoggedIn ? (
              <MainLayoutWithSidebar onLogout={handleLogout}>
                  <Dashboard />
              </MainLayoutWithSidebar>
          ) : (
              <LoginPage onLoginSuccess={handleLoginSuccess} />
          )}
      </>
  );
};

export default App;
