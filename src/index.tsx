import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/global.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './app/store'
import { Provider } from 'react-redux'
import localforage from 'localforage'


localforage.config({
  driver: [localforage.INDEXEDDB,
  localforage.LOCALSTORAGE,
  localforage.WEBSQL
  ], // Force WebSQL; same as using setDriver()
  name: 'lendsqr',
  // version: 1.0,
  // size: 4980736, // Size of database, in bytes. WebSQL-only for now.
  // storeName: 'keyvaluepairs', // Should be alphanumeric, with underscores.
  // description: 'lendsqr users list'
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
