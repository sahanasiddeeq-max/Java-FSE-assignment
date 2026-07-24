import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const showGreeting = () => {
    alert('Hello Member!');
  };

  const handleIncrement = () => {
    setCount(count + 1);
    showGreeting();
  };

  const handleWelcome = (message) => {
    alert(message);
  };

  const handleClickEvent = (event) => {
    event.preventDefault();
    alert('I was clicked');
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => handleWelcome('Welcome')}>Say Welcome</button>
      <button onClick={handleClickEvent}>Click on me</button>
    </div>
  );
}

export default Counter;
