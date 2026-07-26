import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the blogger app and initial book section', () => {
  render(<App />);

  expect(screen.getByText(/blogger app/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /books/i })).toBeInTheDocument();
  expect(screen.getByText(/atomic habits/i)).toBeInTheDocument();
});
