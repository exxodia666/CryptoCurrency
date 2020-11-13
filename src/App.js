import React from 'react';
import {Text} from 'react-native';
const App = () => {
  const isHermes = () => !!global.HermesInternal;
  return (
    <>
      <Text>Hermes Engine: {isHermes().toString()}</Text>
    </>
  );
};

export default App;
