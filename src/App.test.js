// src/App.test.jsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders header with RaasGenAI Dashboard text', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Check if the Header text is present
  const headerElement = screen.getByText(/RaasGenAI Dashboard/i);
  expect(headerElement).toBeInTheDocument();
});
