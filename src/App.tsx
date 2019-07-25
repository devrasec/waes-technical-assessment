import React from 'react';

import './App.css';
import HighlightableEditor from './components/HighlightableEditor';
import HighlightColorSelector from './components/HighlightColorSelector';
import FilterableHighlights from './components/FilterableHighlights';

const App: React.FC = () => {
  return (
    <>
      <h1>WAES Frontend challenge</h1>
      <HighlightColorSelector />
      <HighlightableEditor />
      <FilterableHighlights />
    </>
  );
};

export default App;
