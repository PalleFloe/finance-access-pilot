import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Unregister any existing service workers that might interfere with form submissions
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister();
    }
  });
}

createRoot(document.getElementById("root")!).render(<App />);
