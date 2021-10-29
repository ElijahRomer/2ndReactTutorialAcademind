import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
// adds global state access for interested components.
import { FavoritesContextProvider } from './store/favorites-context';

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById('root')
);

// LINK TO TUTORIAL CODE
// https://github.com/academind/react-complete-guide-code/tree/zz-reactjs-summary/code

// LINK TO YOUTUBE TUTORIAL
// https://www.youtube.com/watch?v=Dorf8i6lCuk&t=2690s
