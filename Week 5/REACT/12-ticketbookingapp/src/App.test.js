import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('switches between guest and user views', async () => {
  render(<App />);

  expect(screen.getByText(/guest page/i)).toBeInTheDocument();
  expect(screen.getByText(/browse flights,login to book tickets./i)).toBeInTheDocument();

  await userEvent.click(screen.getByRole('button', { name: /login/i }));

  expect(screen.getByText(/user page/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /book ticket/i })).toBeInTheDocument();

  await userEvent.click(screen.getByRole('button', { name: /logout/i }));

  expect(screen.getByText(/guest page/i)).toBeInTheDocument();
});
