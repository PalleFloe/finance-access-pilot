import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Aggressively remove all service workers that might interfere with form submissions
if ('serviceWorker' in navigator) {
  // Unregister all existing service workers
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    console.log('Found service workers:', registrations.length);
    for(let registration of registrations) {
      console.log('Unregistering service worker:', registration.scope);
      registration.unregister();
    }
  });

  // Also try to unregister any service worker that might be controlling this page
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({ action: 'SKIP_WAITING' });
  }

  // Clear any service worker caches
  if ('caches' in window) {
    caches.keys().then(function(cacheNames) {
      cacheNames.forEach(function(cacheName) {
        caches.delete(cacheName);
      });
    });
  }
}

createRoot(document.getElementById("root")!).render(<App />);
