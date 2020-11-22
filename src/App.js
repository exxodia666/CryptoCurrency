import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/Store';
import 'react-native-gesture-handler';
import MainNavigator from './navigation/MainNavigator';

const App = () => {
  const isHermes = () => !!global.HermesInternal;
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};
export default App;