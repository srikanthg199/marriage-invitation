import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/style.css';
import './styles/refinements.css';
import './styles/south.css';

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
