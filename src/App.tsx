import React from 'react';
import { Text } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Text as="h1">
        This is a h1 tag
      </Text>

      <Text as="p">
        This is a p tag
      </Text>

      <Text >
        This is a default span tag
      </Text>
    </div>
  );
}

export default App;
