import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Greeting.css';

function Greeting() {
  const navigate = useNavigate();

  return (
    <div className="Greeting">
      <header className="Greeting-header">
        <h1>Salut! 👋</h1>
        <p>Bun venit la ecranul de salut!</p>
        <button 
          className="Greeting-button"
          onClick={() => navigate('/')}
        >
          Înapoi la pagina principală
        </button>
      </header>
    </div>
  );
}

export default Greeting;

