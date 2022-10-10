import React from 'react';
import { RouterProvider } from 'react-router-dom';
import AppRouter from './Router';
import './Styles/App.scss';

function App() {
  return (
    <RouterProvider router={AppRouter} />
  );
}

export default App;
