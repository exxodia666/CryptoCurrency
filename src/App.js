import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './redux/configureStore';
import 'react-native-gesture-handler';
import MainNavigator from './navigation/MainNavigator';
import Loading from './components/Loading';

//TODO ADVANSED SETTINGS
//LOCALISATION 
//SERCH
//FAVOURITE CURRENCIES
//REFACTOR

const App = () => {
  const isHermes = () => !!global.HermesInternal;
  const { store, persistor } = configureStore();
  return (
    <PersistGate loading={<Loading />} persistor={persistor}>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </PersistGate>
  );
};
export default App;