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

      <Text as="a" href="https://www.google.com">
        This is an anchor tag
      </Text>
      <br />
      <Text >
        This is a default span tag
      </Text>
    </div>
  );
}

export default App;
