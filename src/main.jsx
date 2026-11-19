import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initSpeedBooster } from './lib/speedBooster'

// Auto-reload on dynamic import failure when a new deployment invalidates chunk hashes
window.addEventListener('vite:preloadError', (event) => {
  console.warn('[Vite] Preload error detected. Reloading for new deployment...', event);
  window.location.reload();
});

// Launch NovaRocket™ Speed Booster for instant page transitions (desktop hover + mobile touchstart)
initSpeedBooster();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

