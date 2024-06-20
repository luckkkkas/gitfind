import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import {Container} from './styles';

import GlobalStyles from './styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
