import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import { checkBackend } from './api';

function Modal({ show, onClose, message }: { show: boolean, onClose: () => void, message: string }) {
  if (!show) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <p>{message}</p>
        <button className="App-button" onClick={onClose}>Închide</button>
      </div>
    </div>
  )
}

function Home() {
  const navigate = useNavigate();
  const [modalShown, setModalShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleTestBackend = async () => {
    setLoading(true);
    try {
      await checkBackend();
      setModalMessage('tot ok');
    } catch {
      setModalMessage('Eroare la backend!');
    }
    setLoading(false);
    setModalShown(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          className="App-button"
          onClick={() => navigate('/greeting')}
        >
          Mergi la ecranul de salut
        </button>
        <button
          className="App-button"
          onClick={handleTestBackend}
          disabled={loading}
        >
          Testează conexiunea backend
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Modal show={modalShown} onClose={() => setModalShown(false)} message={modalMessage} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </Router>
  );
}

export default App;
