import React from 'react';

import './App.css';
import HighlightableEditor from './components/HighlightableEditor';
import HighlightColorSelector from './components/HighlightColorSelector';
import HighlightList from './components/HighlightList';

const App: React.FC = () => {
  return (
    <>
      <h1>WAES Frontend challenge</h1>
      <HighlightColorSelector />
      <HighlightableEditor />
      <HighlightList />
    </>
  );
};

export default App;
