import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react'
import App from './App';

import GS from './GlobalStyles'
import { AuthProvider } from './hooks/useAuth';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GS} />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
