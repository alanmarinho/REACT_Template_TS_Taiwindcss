import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ExemploContext } from './context/context.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ExemploContext>
      <App />
    </ExemploContext>
  </BrowserRouter >
);
