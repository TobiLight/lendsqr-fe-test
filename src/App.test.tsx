import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from './App';
import Home from './Pages/Home';
import { createMemoryHistory } from '@remix-run/router';
import { createBrowserRouter, Router, RouterProvider, useLoaderData, useRouteLoaderData } from 'react-router-dom';
import { UserType } from './helpers/types';
import AppRouter from './Router';


afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
})

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: () => (jest.fn()),
  useHref: () => (jest.fn()),
  Link: jest.fn()
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (jest.fn())
}));

test('Hello world text is present in the page', () => {
  render(<Home />);
  let text = screen.getByText(/Hello World/i)
  expect(text).toBeInTheDocument()
});


test('Get lists of users on homepage', () => {

})
