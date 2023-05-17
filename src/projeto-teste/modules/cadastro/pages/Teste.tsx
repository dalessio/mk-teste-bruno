import React from 'react';
import './Steps.css';
import { MOCK_STEP1 } from '../../../data/mockStep1';

function Teste() {
  return (
    <div>
      <header className="Steps-header">
        <h1>
          Teste Step 1
        </h1>
        <pre>{JSON.stringify(MOCK_STEP1, null, ' ')}</pre>
      </header>
    </div>
  );
}

export default Teste;
