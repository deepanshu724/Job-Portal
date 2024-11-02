import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { dark } from '@clerk/themes';

// Import environment variables
const FRONTEND_API = import.meta.env.VITE_CLERK_FRONTEND_API;
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY || !FRONTEND_API) {
  throw new Error("Missing Clerk configuration keys");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY} 
      frontendApi={FRONTEND_API}
      afterSignOutUrl="/" 
      appearance={{
        baseTheme: dark,
      }}
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>,
);
