import React from 'react';
import { Text, Emphasis } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Text as="h1" color='green' style={{ fontSize: '80px' }}>
        This is a h1 tag
      </Text>

      <Text as="p" color='orange'>
        This is a p tag
      </Text>

      <Text as="a" href="https://www.google.com">
        This is an anchor tag
      </Text>
      <br />
      <Text >
        This is a default span tag
      </Text>
      <br />
      <Text as={Emphasis}>
        This is an Emphasis Component element
      </Text>
    </div>
  );
}

export default App;
