import React, { useState, FormEvent } from 'react';


interface LoginPageProps {
    onLoginSuccess: () => void
}


const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
    // Manejamos el estado de los campos del formulario.
    const [email, setEmail] = useState<string>('test@example.com');
    const [password, setPassword] = useState<string>('password');
    const [error, setError] = useState<string>('');

    // Función que se ejecuta al enviar el formulario.
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setError('');


        if (!email || !password) {
            setError('Por favor, completa todos los campos.');
            return;
        }

        if (!email.includes('@')) {
            setError('Por favor, introduce un correo electrónico válido.');
            return;
        }

        if (email === 'test@example.com' && password === 'password') {
            onLoginSuccess();
        } else {
            setError('Correo electrónico o contraseña incorrectos.');
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
                <div className="card shadow-lg p-4">
                    <div className="card-body">
                        <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                <input
                                    type="email"
                                    className="form-control rounded-pill"
                                    id="email"
                                    placeholder="name@example.com"
                                    aria-describedby="emailHelp"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control rounded-pill"
                                    id="password"
                                    placeholder="Escribe tu contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {/* Mostramos el mensaje de error si existe */}
                            {error && <div className="alert alert-danger" role="alert">{error}</div>}
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary rounded-pill mt-3">
                                    Entrar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LoginPage;
