import { createElement } from 'react';

export function getRandomTsCode(): string {
  const code = `
  import { useState } from 'react';

  export default function RandomComponent() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <h1>Random Component</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      </div>
    );
  }
  `;

  return code;
}
