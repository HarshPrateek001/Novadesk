import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Auto-reload on dynamic import failure when a new deployment invalidates chunk hashes
window.addEventListener('vite:preloadError', (event) => {
  console.warn('[Vite] Preload error detected. Reloading for new deployment...', event);
  window.location.reload();
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

