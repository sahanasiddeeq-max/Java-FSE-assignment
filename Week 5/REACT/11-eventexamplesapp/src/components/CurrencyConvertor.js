import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const normalizedCurrency = currency.trim().toLowerCase();
    const numericAmount = Number(amount);

    if (normalizedCurrency === 'euro') {
      const convertedAmount = numericAmount * 80;
      alert(`Converting to Euro Amount is ${convertedAmount}`);
    } else if (normalizedCurrency === 'dollar') {
      const convertedAmount = numericAmount * 75;
      alert(`Converting to Dollar Amount is ${convertedAmount}`);
    } else if (normalizedCurrency === 'dirham') {
      const convertedAmount = numericAmount * 22;
      alert(`Converting to Dirham Amount is ${convertedAmount}`);
    }
  };

  return (
    <div className="currency-convertor">
      <h2 className="currency-heading">Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit} className="currency-form">
        <div className="form-row">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>

        <div className="form-row">
          <label htmlFor="currency">Currency</label>
          <input
            id="currency"
            type="text"
            value={currency}
            onChange={(event) => setCurrency(event.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
