import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the counter and currency converter', () => {
  render(<App />);

  expect(screen.getByText(/Counter:/i)).toBeInTheDocument();
  expect(screen.getByText(/Currency Convertor!!!/i)).toBeInTheDocument();
});
