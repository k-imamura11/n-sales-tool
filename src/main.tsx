import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from 'firebase/app';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import routes from '~react-pages';

const App = () => {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </React.Suspense>
  );
};

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
