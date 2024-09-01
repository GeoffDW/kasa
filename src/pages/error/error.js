import React from "react";
import './error.css';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <main>
            <section className="error">
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/">Retourner sur la page d’accueil</Link>
            </section>
        </main>
    )
}

export default Error;