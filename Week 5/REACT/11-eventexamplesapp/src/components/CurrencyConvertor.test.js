import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CurrencyConvertor from './CurrencyConvertor';

describe('CurrencyConvertor', () => {
  test('converts euro to indian rupees and alerts the result', async () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<CurrencyConvertor />);

    userEvent.type(screen.getByLabelText(/Amount/i), '80');
    userEvent.type(screen.getByLabelText(/Currency/i), 'Euro');
    userEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(alertSpy).toHaveBeenCalledWith('Converting to Euro Amount is 6400');
    alertSpy.mockRestore();
  });
});
