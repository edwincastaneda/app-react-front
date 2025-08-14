import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from "../app/layouts/Sidebar";


// ----------------------------------------------------
// Tests para el componente Sidebar
// ----------------------------------------------------
describe('Sidebar Component', () => {
    it('should render the "Menú" title', () => {
        // 1. Renderiza el componente.
        render(<Sidebar />);

        // 2. Busca el título "Menú" y afirma que está en el documento.
        const menuTitle = screen.getByText('Menú');
        expect(menuTitle).toBeInTheDocument();
    });

    it('should render the correct navigation links', () => {
        // 1. Renderiza el componente.
        render(<Sidebar />);

        // 2. Busca cada enlace por su texto visible.
        const dashboardLink = screen.getByText('Dashboard');
        const profileLink = screen.getByText('Perfil');
        const settingsLink = screen.getByText('Configuración');

        // 3. Afirma que cada enlace fue encontrado y está en el documento.
        expect(dashboardLink).toBeInTheDocument();
        expect(profileLink).toBeInTheDocument();
        expect(settingsLink).toBeInTheDocument();
    });

    it('should have the correct href attribute on links', () => {
        // 1. Renderiza el componente.
        render(<Sidebar />);

        // 2. Busca los enlaces por su rol 'link' y el texto asociado.
        const dashboardLink = screen.getByRole('link', { name: 'Dashboard' });
        const profileLink = screen.getByRole('link', { name: 'Perfil' });
        const settingsLink = screen.getByRole('link', { name: 'Configuración' });

        // 3. Afirma que cada enlace tiene el atributo 'href' correcto.
        // En este caso, el valor es "#" para todos los enlaces.
        expect(dashboardLink).toHaveAttribute('href', 'http://localhost');
        expect(profileLink).toHaveAttribute('href', 'http://localhost');
        expect(settingsLink).toHaveAttribute('href', 'http://localhost');
    });
});
