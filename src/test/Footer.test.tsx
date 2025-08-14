import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from "../app/layouts/Footer";



// ----------------------------------------------------
// Tests para el componente Footer
// ----------------------------------------------------
describe('Footer Component', () => {
    it('should render the correct copyright text', () => {
        // 1. Renderiza el componente en un entorno de prueba virtual
        render(<Footer />);

        // 2. Busca el elemento que contiene el texto de copyright.
        // Usamos una expresión regular para encontrar el texto sin importar
        // la capitalización, haciendo el test más robusto.
        const copyrightText = screen.getByText(/2025 Mi Aplicación/i);

        // 3. Afirma que el elemento fue encontrado y está en el documento.
        expect(copyrightText).toBeInTheDocument();
    });
});
