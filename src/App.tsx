import React from 'react';

import './App.css';
import HighlightableEditor from './components/HighlightableEditor';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>WAES Frontend challenge</h1>
      <HighlightableEditor />
    </div>
  );
};

export default App;
