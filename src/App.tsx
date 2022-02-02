import { useState } from 'react';
import './App.css';
import { getGPUTier } from 'detect-gpu';

function App() {
  const [result, setResult] = useState<any>(null);

  return (
    <div className="App">
      <header className="App-header">
        <pre>{JSON.stringify(result, null, 2)}</pre>
        <button
          onClick={() => {
            getGPUTier()
              .then((res) => {
                setResult(res);
              })
              .catch((err) => {
                console.error(err);
                setResult({ error: err.message });
              });
          }}
        >
          Run test
        </button>
      </header>
    </div>
  );
}

export default App;
